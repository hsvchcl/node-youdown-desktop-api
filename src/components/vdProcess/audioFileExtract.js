import shell from "shelljs";
import { findFileConfig } from "../appConfig/index.js";
export const audioFileExtract = ({
  baseUserPath,
  fileFinalPath,
  videoName,
}) => {
  return new Promise(async (resolve, reject) => {
    try {
      // /opt/homebrew/Cellar/ffmpeg/5.0/bin/ffmpeg
      const command = `${
        findFileConfig().path_ffmpeg
      } -y -i ${fileFinalPath} ${baseUserPath}/[YOUDOWN]_${videoName}.mp3`;
      shell.exec(command, { silent: true }, (code, stdout, stderr) => {
        if (code === 0) {
          resolve(true);
        } else {
          if (stdout) {
            console.info(stdout);
          } else if (stderr) {
            console.info(stderr);
          }
          resolve(false);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
};
