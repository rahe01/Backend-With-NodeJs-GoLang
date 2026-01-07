import express from "express";
import { CommentController } from "./comment.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router = express.Router();


router.get("/:commentId" , CommentController.getCommentById)
router.get("/author/:authorId" , CommentController.getCommentsByAuthor)



router.post(
  "/",
  auth(UserRole.ADMIN, UserRole.USER),
  CommentController.createComment
);

router.patch("/:commentId" , auth(UserRole.ADMIN, UserRole.USER),CommentController.updateComment)



router.delete("/:commentId" ,auth(UserRole.USER, UserRole.ADMIN) , CommentController.deleteComment)


export const commentRouter = router;
