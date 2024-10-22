# Shopping List API 🛒🍎

This is a **TypeScript Node.js API project** for basic CRUD operations on a shopping list. The items are indexed by a numeric key and store details like description, quantity, unit, and a checkbox to indicate whether the item has been purchased. The "Add" operation always sets the checkbox as unchecked. Data is stored in memory, and it’s designed for **testing GitHub Copilot apps** and building simple API interactions.

## Features:
- **Create**: Add new items to your shopping list.
- **Read**: View all shopping list items or a specific one.
- **Update**: Modify item details, such as description or quantity.
- **Delete**: Remove items once they're no longer needed.
- **In-memory storage**: All data is volatile—**it’s lost upon API restart**.

## Workshop Ready 🛠️

This API also builds as a **Docker image** that can be used to quickly launch and run the application anywhere Docker is supported. It’s a great **test bed for interacting with APIs** during a GitHub Extensions workshop for example 😉, giving you a hands-on way to experiment with CRUD operations while building and testing your own GitHub Copilot Extensions. 

Whether you're learning CRUD basics, experimenting with API integrations, or playing with Copilot-powered apps, this project provides the perfect lightweight environment.

## Files

### `src/controllers/itemController.ts`

This file exports a class `ItemController` which handles the CRUD operations for shopping list items. It includes methods such as `createItem`, `getItem`, `updateItem`, and `deleteItem`.

### `src/models/itemModel.ts`

This file exports an interface `Item` that represents the structure of a shopping list item. It includes properties such as `id` (numeric key), `description`, `quantity`, `unit`, and `purchased` (boolean indicating whether the item has been purchased or not).

### `src/routes/itemRoutes.ts`

This file exports a function `setRoutes` that sets up the routes for the shopping list API, mapping CRUD operations to the corresponding methods in the `ItemController`.

### `src/app.ts`

This file is the entry point of the application. It creates an instance of the Express app, sets up middleware, and registers the item routes.

### `tsconfig.json`

This file is the TypeScript configuration, specifying compiler options and files to include.

### `package.json`

This file is the npm configuration, listing the dependencies and scripts for the project.

## Getting Started

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. (Optional) Configure the Azure Storage settings in `src/config/azureConfig.ts`.
4. Start the server using `npm start` or launch via the **Docker image**.

## API Endpoints

- `GET /items`: Get all shopping list items.
- `GET /items/:id`: Get a specific shopping list item by ID.
- `POST /items`: Create a new shopping list item.
- `PUT /items/:id`: Update a specific shopping list item by ID.
- `DELETE /items/:id`: Delete a specific shopping list item by ID.

## Contributing

Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [ISC License](LICENSE).

---

Whether you’re learning the basics or preparing for a GitHub Extensions workshop, get coding and have fun with your very own shopping list API! 🚀
