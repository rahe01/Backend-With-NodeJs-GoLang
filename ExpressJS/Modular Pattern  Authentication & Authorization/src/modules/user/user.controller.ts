import { Request, Response } from "express";
import { pool } from "../../config/db";
import { userServices } from "./user.service";






const createUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.createUser(req.body);
    // res.send({message: "data inserted"})
    res.status(201).json({
      success: true,
      message: "Data inserted",
      data: result.rows[0],
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getUser();
    res.status(200).json({
      success: true,
      message: "Users retrived successfully",
      data: result.rows,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      details: err,
    });
  }
};



const getSingleUser = async (req: Request, res: Response) => {

  const id = req.params.id;

  try {
    const result = await userServices.getSingleUser(id as string)

    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "user not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "user  found",
        data: result.rows[0],
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}



const updateUser = async (req: Request, res: Response) => {
  // console.log(req.params.id);

  // res.send({message : "Api is coll"})

  const {name, email} = req.body;

  try {
    const result = await userServices.updateUser(name , email , req.params.id!)
    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "user not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "user updated",
        data: result.rows[0],
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}


const deleteUser =  async (req: Request, res: Response) => {
  try {
    const result = await userServices.deletUser(req.params.id!)

    if (result.rowCount === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });

  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}









export const userControllers = {
  createUser,
  getUsers,
  getSingleUser,
  updateUser ,
  deleteUser
};
