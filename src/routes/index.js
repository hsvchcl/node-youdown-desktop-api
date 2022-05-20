import {
  downloadVideoList,
  getConfig,
  saveConfig,
} from "../controller/index.js";

import express from "express";
const router = express.Router();
/* GET */
router.get("/check-status", (req, res) => {
  res.status(200).json({ status: true });
});

router.get("/config", getConfig);

/* POST */
router.post("/download-video-list", downloadVideoList);
router.post("/save-config", saveConfig);

export default router;
