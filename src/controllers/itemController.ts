import { Request, Response } from "express";
import { Item } from "../models/itemModel";

let items: Item[] = [];
let currentId = 1;

export class ItemController {
  // Create a new item
  public createItem(req: Request, res: Response): void {
    const { description, quantity, unit } = req.body;
    const newItem: Item = {
      id: currentId++,
      description,
      quantity,
      unit,
      purchased: false,
    };
    items.push(newItem);
    res.status(201).json(newItem);
  }

  // Get an item by ID
  public getItem(req: Request, res: Response): void {
    const id = parseInt(req.params.id, 10);
    const item = items.find((item) => item.id === id);
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  }

  // Update an item
  public updateItem(req: Request, res: Response): void {
    const id = parseInt(req.params.id, 10);
    const { description, quantity, unit, purchased } = req.body;
    const item = items.find((item) => item.id === id);
    if (item) {
      item.description = description;
      item.quantity = quantity;
      item.unit = unit;
      item.purchased = purchased;
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  }

  // Delete an item
  public deleteItem(req: Request, res: Response): void {
    const id = parseInt(req.params.id, 10);
    const index = items.findIndex((item) => item.id === id);
    if (index !== -1) {
      items.splice(index, 1);
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  }

  // List all items
  public getItems(req: Request, res: Response): void {
    res.status(200).json(items);
  }
}
