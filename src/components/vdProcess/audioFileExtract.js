import shell from "shelljs";

export const audioFileExtract = ({
  baseUserPath,
  fileFinalPath,
  videoName,
}) => {
  return new Promise(async (resolve, reject) => {
    try {
      // /opt/homebrew/Cellar/ffmpeg/5.0/bin/ffmpeg
      const command = `${process.env.FFMPEG_DIR} -y -i ${fileFinalPath} ${baseUserPath}/[YOUDOWN]_${videoName}.mp3`;
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
