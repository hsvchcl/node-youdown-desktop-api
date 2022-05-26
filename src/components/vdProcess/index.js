import { videoDownload } from "./videoDownload.js";
import { audioFileExtract } from "./audioFileExtract.js";
import { deleteTempFile } from "./deleteTempFile.js";
import { findFileConfig } from "../appConfig/index.js";
const main = async (videoUrl, type) => {
  try {
    const pathTemp = await videoDownload(videoUrl, type);
    if (type === "audioonly") {
      const audioExtract = await audioFileExtract(pathTemp);
      if (audioExtract) {
        deleteTempFile(pathTemp.fileFinalPath);
      }
      return audioExtract;
    } else {
      return true;
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const downloadProccess = async (videoList, type) => {
  try {
    // const videoList = ["https://www.youtube.com/watch?v=0m4NCA2dcnc"];
    // "audioandvideo"
    // "audioonly"
    const proccess = await Promise.all(
      videoList.map(async (video) => {
        return main(video, type);
      })
    );

    if (proccess.includes(false)) {
      console.info("❌ Ocurrió un error.");
      return { status: false, message: "Error en el proceso de descarga." };
    } else {
      console.info("✅ Proceso finalizado.");
      return {
        status: true,
        message: `Archivo guardado en ${findFileConfig().path_downloads}.`,
        path_download: findFileConfig().path_downloads,
      };
    }
  } catch (error) {
    return {
      status: false,
      message: `${error.message}`,
    };
  }
};
