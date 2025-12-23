import { pool } from "../../config/db";
import bcrypt from "bcryptjs";

const userPasswordReset = async (
  id: number,
  oldpassword: string,
  newpassword: string
) => {
  if (!id || !oldpassword || !newpassword) {
    throw new Error("All fields are required");
  }

  const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);

  if (result.rows.length == 0) {
    throw new Error("User not found");
  }

  const user = result.rows[0];

  const isOldMatch = await bcrypt.compare(oldpassword, user.password);

  if (!isOldMatch) {
    throw new Error("Your Old password not matched");
  }

  const isSamePassword = await bcrypt.compare(newpassword, user.password);

  if (isSamePassword) {
    throw new Error("New password must be diffrent from old password");
  }

  const passLength = (newpassword as string).length;

  if (passLength < 6) {
    throw new Error("Password length at least 6 characters");
  }

  const hashedpassword = await bcrypt.hash(newpassword as string, 10);

  const updatePassInDB = await pool.query(
    `
        UPDATE users SET password = $1 WHERE id = $2
    `,
    [hashedpassword, id]
  );

  if (updatePassInDB.rowCount === 0) {
    throw new Error("Password update failed");
  }

  return {
    success: true,
    message: "Password updated successfully",
  };
};

export const userServices = {
  userPasswordReset,
};
