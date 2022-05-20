import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const configDir = join(__dirname, "../../config/config.json");

export const findFileConfig = () => {
  try {
    // find if config file exist
    const rawData = fs.readFileSync(configDir);
    const configObject = JSON.parse(rawData);
    return configObject;
  } catch (error) {
    return error;
  }
};

export const saveConfiguration = (form) => {
  try {
    const data = JSON.stringify(form);
    fs.writeFileSync(configDir, data);
    return { status: true, message: "Configuración almacenada con éxito" };
  } catch (error) {
    return {
      status: false,
      message: "Ocurrió un error",
      error_details: error.message,
    };
  }
};
