import fs from "fs";
import ytdl from "ytdl-core";
import { findFileConfig } from "../appConfig/index.js";

export const videoDownload = (videoUrl, type) => {
  return new Promise(async (resolve, reject) => {
    try {
      // const videoValidate = ytdl.validateURL(videoUrl);
      const videoID = ytdl.getURLVideoID(videoUrl);
      let info = await ytdl.getBasicInfo(videoID);
      console.log(info.videoDetails.thumbnail);

      // console.log("videoValidate=>", videoValidate);
      // console.log("videoID=>", videoID);
      // console.log("info=>", info);

      const baseUserPath = findFileConfig().path_downloads;
      const videoBasicInfo = await ytdl.getBasicInfo(videoUrl);
      const videoName = videoBasicInfo.videoDetails.title
        .replace(/\s/g, "")
        .replace(/[^a-zA-Z ]+/gi, "_");
      const fileFinalPath = `${baseUserPath}/[YOUDOWN]_${videoName}.mp4`;

      ytdl(videoUrl, { filter: type }).pipe(
        fs
          .createWriteStream(fileFinalPath)
          .on("finish", () => {
            resolve({ baseUserPath, fileFinalPath, videoName });
          })
          .on("error", (err) => {
            throw new Error(err.message);
          })
      );
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
