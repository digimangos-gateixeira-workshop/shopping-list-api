import express from "express";
import { setRoutes } from "./routes/itemRoutes";
import swaggerUi from "swagger-ui-express";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

const swaggerDocument = require("./swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Register item routes
setRoutes(app);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
