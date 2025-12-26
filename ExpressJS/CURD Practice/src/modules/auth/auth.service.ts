import bcrypt from "bcryptjs";
import { pool } from "../../config/db";
import config from "../../config";
import jwt from "jsonwebtoken";

const signupUser = async (payload: Record<string, unknown>) => {
  const { name, email, password, phone, role } = payload;

  if (!name || !email || !password || !phone || !role) {
    throw new Error("All fields are required. Please provide all info");
  }

  const emailLower = (email as string).toLowerCase();

  const passLength = (password as string).length;

  if (passLength < 6) {
    throw new Error("Password must be at least 6 characters");
  }

  const vailidRole = ["admin", "customer"];

  if (!vailidRole.includes(role as string)) {
    throw new Error("Invailid Role . you are not a vailid users");
  }

  const hashedpass = await bcrypt.hash(password as string, 10);

  const result = await pool.query(
    `
        INSERT INTO users(name,email,password, phone,role)
        VALUES($1,$2,$3,$4,$5) RETURNING id, name,email,phone,role
        `,
    [name, emailLower, hashedpass, phone, role]
  );

  return result.rows[0];
};












const signinUser = async (email: string, password: string) => {
  if (!email || !password) {
    throw new Error(
      "Email and password are required. Please provide!!!!!!!!!!!!!"
    );
  }

  const emailLower = (email as string).toLowerCase();

  const result = await pool.query(`SELECT * FROM users WHERE  email = $1`, [
    emailLower,
  ]);

  if (result.rows.length === 0) {
    throw new Error("Tmr email amader database a nai............");
  }

  const user = result.rows[0];

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw new Error("Wrong Password discco kno.???");
  }

  const secret = config.jwt_secret as string;

  const token = jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    secret,
    { expiresIn: "7d" }
  );

  const userData = {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    role: user.role,
  };

  return { token, user: userData };
};

export const authServices = {
  signupUser,
  signinUser,
};
