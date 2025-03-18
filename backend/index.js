import express from "express";
import helmet from "helmet";
import cors from "cors";
import { connectDB } from "./src/config/mongo.js";
import { productRoutes } from "./src/routes/productRoutes.js";
import { userRoutes } from "./src/routes/userRoutes.js";
import errorMiddleware from "./src/middleware/errorMiddleware.js";
import compression from "compression";

//import swaggerUi from "swagger-ui-express";
//import YAML from "yamljs";

const FRONTEND_URL = process.env.FRONTEND_URL;
process.loadEnvFile();

const PORT = process.env.PORT;

const app = express();

app.use(express.static("public", { maxAge: "1y" }));

app.use(
  compression({
    threshold: 1024,
    level: 6,
  })
);

app.use(cors({ origin: FRONTEND_URL }));

//const swaggerDocument = YAML.load("./swagger.yaml");
//app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(helmet());
app.use(express.json());

connectDB();

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log("Servidor en escucha por el puerto http://localhost:" + PORT);
});
