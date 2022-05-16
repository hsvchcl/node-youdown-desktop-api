import os from "os";
export const getUserHomeDir = () => {
  return os.homedir();
};
