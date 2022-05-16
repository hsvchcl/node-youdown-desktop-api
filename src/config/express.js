import express from "express";
import morgan from "morgan";
import cors from "cors";
import routes from "../routes/index.js";
import 'dotenv/config'

export const init = () => {
  //inicializamos la APP
  const app = express();

  //Para evitar el problema con los headers.
  app.use(cors());

  //Morgan nos sirve para mostrar por consola las peticiones.
  app.use(morgan("dev"));

  //bodyParser middleware used for resolving the req and res body objects (urlEncoded and json formats)
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );

  //Gestion de rutas
  app.use("/api/youdown", routes);

  return app;
};
