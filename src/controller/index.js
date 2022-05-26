import { downloadProccess } from "../components/vdProcess/index.js";
import {
  findFileConfig,
  saveConfiguration,
} from "../components/appConfig/index.js";

export const saveConfig = (req, res) => {
  try {
    const response = saveConfiguration(req.body);
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    return handleError(error, res);
  }
};

export const getConfig = (_req, res) => {
  try {
    const configObject = findFileConfig();
    res.status(200).json({ status: true, config: configObject });
  } catch (error) {
    return handleError(error, res);
  }
};

export const downloadVideoList = async (req, res) => {
  try {
    const { videoList, type } = req.body;
    const resp = await downloadProccess(videoList, type);
    return handlerResponse(resp, res);
  } catch (error) {
    return handleError(error, res);
  }
};

const handlerResponse = (response, res) => {
  return res.status(200).json(response);
};
const handleError = (error, res) => {
  return res.status(500).json({ error: error.message });
};
