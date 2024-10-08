import express from "express";
import { setRoutes } from "./routes/itemRoutes";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(__dirname, express.static("public"));
app.use(
  "/api-docs",
  express.static("node_modules/swagger-ui-dist/", { index: false }),
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument),
);

// Register item routes
setRoutes(app);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
