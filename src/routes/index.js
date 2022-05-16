import { downloadVideoList } from "../controller/index.js";
import express from "express";
const router = express.Router();
/* GET */
router.get("/check-status", (req, res) => {
  res.status(200).json({ status: true });
});
// router.get("/to-path/:path", navigateIntoDir);

/* POST */
router.post("/download-video-list", downloadVideoList);

export default router;
