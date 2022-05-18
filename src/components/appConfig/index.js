import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

export const findFileConfig = () => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const configDir = join(__dirname, "../../config/config.json");

    // find if config file exist
    const rawData = fs.readFileSync(configDir);
    const configObject = JSON.parse(rawData);
    return configObject;
  } catch (error) {
    return error;
  }
};
