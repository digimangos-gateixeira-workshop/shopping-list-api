import { Request, Response } from "express";
import { ItemController } from "../src/controllers/itemController";

describe("ItemController", () => {
  let itemController: ItemController;
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    itemController = new ItemController();
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn(),
    };
  });

  describe("createItem", () => {
    it("should create a new item", () => {
      req.body = { description: "Milk", quantity: 2, unit: "litres" };

      itemController.createItem(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          id: expect.any(Number),
          description: "Milk",
          quantity: 2,
          unit: "litres",
          purchased: false,
        }),
      );
    });
  });

  describe("getItem", () => {
    it("should return an item by ID", () => {
      req.params = { id: "1" };
      itemController.createItem(
        {
          body: { description: "Milk", quantity: 2, unit: "litres" },
        } as Request,
        res as Response,
      );

      itemController.getItem(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          id: 1,
          description: "Milk",
          quantity: 2,
          unit: "litres",
          purchased: false,
        }),
      );
    });

    it("should return 404 if item not found", () => {
      req.params = { id: "999" };

      itemController.getItem(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: "Item not found" });
    });
  });

  describe("updateItem", () => {
    it("should update an existing item", () => {
      req.params = { id: "1" };
      itemController.createItem(
        {
          body: { description: "Milk", quantity: 2, unit: "litres" },
        } as Request,
        res as Response,
      );
      req.body = {
        description: "Bread",
        quantity: 1,
        unit: "loaf",
        purchased: true,
      };

      itemController.updateItem(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          id: 1,
          description: "Bread",
          quantity: 1,
          unit: "loaf",
          purchased: true,
        }),
      );
    });

    it("should return 404 if item not found", () => {
      req.params = { id: "999" };
      req.body = {
        description: "Bread",
        quantity: 1,
        unit: "loaf",
        purchased: true,
      };

      itemController.updateItem(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: "Item not found" });
    });
  });

  describe("deleteItem", () => {
    it("should delete an existing item", () => {
      req.params = { id: "1" };
      itemController.createItem(
        {
          body: { description: "Milk", quantity: 2, unit: "litres" },
        } as Request,
        res as Response,
      );

      itemController.deleteItem(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(204);
      expect(res.send).toHaveBeenCalled();
    });

    it("should return 404 if item not found", () => {
      req.params = { id: "999" };

      itemController.deleteItem(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: "Item not found" });
    });
  });

  describe("getItems", () => {
    it("should return all items", () => {
      itemController.createItem(
        {
          body: { description: "Milk", quantity: 2, unit: "litres" },
        } as Request,
        res as Response,
      );
      itemController.createItem(
        {
          body: { description: "Bread", quantity: 1, unit: "loaf" },
        } as Request,
        res as Response,
      );

      itemController.getItems(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(
        expect.arrayContaining([
          expect.objectContaining({
            description: "Milk",
            quantity: 2,
            unit: "litres",
          }),
          expect.objectContaining({
            description: "Bread",
            quantity: 1,
            unit: "loaf",
          }),
        ]),
      );
    });
  });
});
