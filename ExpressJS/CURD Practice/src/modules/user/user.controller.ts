import { Request, Response } from "express";
import { userServices } from "./user.service";

const userPasswordReset = async (req: Request, res: Response) => {
  try {
    if (!req.body) {
      return res.status(400).json({
        success: false,
        message: "Request body undefined",
      });
    }

    const { id, oldPassword, newPassword } = req.body;

    if (!id || !oldPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "id, oldPassword and newPassword are required",
      });
    }

    const result = await userServices.userPasswordReset(
      id,
      oldPassword,
      newPassword
    );

    res.status(200).json({
      success: true,
      message: "Password update successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

export const userControllers = {
  userPasswordReset,
};
