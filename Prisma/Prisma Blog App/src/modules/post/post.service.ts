import { Request, Response } from "express";
import { Post } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";


const createPost = async(data:Omit<Post , "id" | "created_at" | "updated_at">) =>{

    const result = await prisma.post.create({
        data

       
    })

    return result


}



const getPost = async()=>{


    const result = await prisma.post.findMany()


    return result;

}



export const postService ={
    createPost,
    getPost
}