import { init } from "./src/config/express.js";
import srv from "http";

const port = process.env.YOUDOWN_PORT || 3000
const app = init();
const server = srv.createServer(app);
server.listen(port, () => console.log(`Server now running on port ${port}!`));
