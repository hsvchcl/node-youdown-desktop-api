import { downloadProccess } from "../components/vdProcess/index.js";
export const downloadVideoList = async (req, res) => {
  try {
    const { videoList, type, path } = req.body;
    const resp = await downloadProccess(videoList, type, path);
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
