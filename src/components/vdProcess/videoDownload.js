import { getUserHomeDir } from "../../utils/utils.js";
import fs from "fs";
import ytdl from "ytdl-core";

export const videoDownload = (videoUrl, type, path = null) => {
  return new Promise(async (resolve, reject) => {
    try {
      const baseUserPath = `${getUserHomeDir()}/${path}`;
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
            console.log(err);
          })
      );
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
