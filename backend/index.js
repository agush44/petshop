import express from "express";
import helmet from "helmet";
import cors from "cors";
import { connectDB } from "./src/config/mongo.js";
import { productRoutes } from "./src/routes/productRoutes.js";
import { userRoutes } from "./src/routes/userRoutes.js";
import errorMiddleware from "./src/middleware/errorMiddleware.js";
import compression from "compression";
import jsonOptimizationMiddleware from "./src/middleware/jsonOptimizationMiddleware.js";

//import swaggerUi from "swagger-ui-express";
//import YAML from "yamljs";

const FRONTEND_URL = process.env.FRONTEND_URL;

const PORT = process.env.PORT || 5001;

const app = express();

// Configuración de ETag para validación de caché
app.set("etag", "strong");

// Middleware para monitoreo de rendimiento
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} - ${duration}ms`);
  });
  next();
});

// Servir archivos estáticos con caché de 1 año
app.use(express.static("public", { maxAge: "1y" }));

// Compresión mejorada con filtro para tipos de contenido
app.use(
  compression({
    threshold: 1024,
    level: 6,
    filter: (req, res) => {
      if (req.headers["x-no-compression"]) {
        return false;
      }
      // No comprimir imágenes, videos, etc. que ya están comprimidos
      const contentType = res.getHeader("Content-Type") || "";
      return !/^(image|video|audio)/i.test(contentType);
    },
  })
);

// Configuración de CORS
const allowedOrigins = [
  "https://tupetshop.vercel.app",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("No permitido por la política CORS"));
      }
    },
    credentials: true,
  })
);

// Middleware de seguridad
app.use(helmet());

// Parseo de JSON con optimización
app.use(express.json());

// Conectar a la base de datos
connectDB();

// Configuración de caché para rutas específicas
// Productos - caché de 1 hora para mejorar rendimiento
app.use("/api/products", (req, res, next) => {
  // Solo aplicar caché a peticiones GET
  if (req.method === "GET") {
    res.set("Cache-Control", "public, max-age=3600"); // 1 hora
  } else {
    // Para métodos que modifican datos, evitar caché
    res.set("Cache-Control", "no-store");
  }
  next();
});

//const swaggerDocument = YAML.load("./swagger.yaml");
//app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rutas de la API
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

// Middleware de manejo de errores
app.use(errorMiddleware);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log("Servidor en escucha por el puerto http://localhost:" + PORT);
});
