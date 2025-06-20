import { Router } from "express";
import {
    getAllVideos,
    publishAVideo,
    getVideoById
} from "../controllers/video.controller.js"
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router
.route("/all-videos")
.get(
    verifyJWT,
    getAllVideos
)

router
.route("/publish-video")
.post(
    upload.fields([
        {
            name: "thumbnail",
            maxCount: 1
        },
        {
            name: "videoFile",
            maxCount: 1
        }
    ]),
    publishAVideo
)

router
.route("/c/:videoId")
.get(
    verifyJWT,
    getVideoById
)

export default router