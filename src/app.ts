import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";

import router from "./routes/router";

dotenv.config();

const app: Application = express();
app.set("port", process.env.PORT ?? 3001);

// Configuración de middleware
app.use(express.json());
app.use(cors());

// Rutas de la API
app.use("/api", router);

// Manejador de errores
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Ha ocurrido un error en el servidor" });
});

export default app;
