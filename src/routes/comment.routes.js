import { Router } from 'express';
import { 
    getVideoComments,
    addComment,
    updateComment,
    deleteComment
} from "../controllers/comment.controller.js"
import {verifyJWT} from "../middlewares/auth.middleware.js"

const router = Router();

router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

router
.route("/:videoId")
.get(
    verifyJWT,
    getVideoComments
)

router
.route("/add/:videoId")
.post(
    verifyJWT,
    addComment
);

router
.route("/c/:commentId")
.patch(
    verifyJWT,
    updateComment
);

router
.route("/d/:commentId")
.delete(
    verifyJWT,
    deleteComment
)

export default router