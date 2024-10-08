import express from "express";
import { ItemController } from "../controllers/itemController";

export function setRoutes(app: express.Application) {
  app.get("/", (req, res) => {
    return res.send("OK");
  });

  const itemController = new ItemController();
  app.post("/items", itemController.createItem);
  app.get("/items/:id", itemController.getItem);
  app.get("/items", itemController.getItems);
  app.put("/items/:id", itemController.updateItem);
  app.delete("/items/:id", itemController.deleteItem);
}
