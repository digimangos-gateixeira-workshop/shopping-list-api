# Shopping List API

This is a TypeScript Node.js API project for basic CRUD operations for a shopping list. The items are indexed by a numeric key and store description, quantity, unit, and a checkbox to indicate whether the item has been purchased or not. The "Add" operation always has the checkbox unchecked. The data is stored in memory and designed for use with testing copilot apps.

## Files

### `src/controllers/itemController.ts`

This file exports a class `ItemController` which handles the CRUD operations for the shopping list items. It includes methods such as `createItem`, `getItem`, `updateItem`, and `deleteItem`.

### `src/models/itemModel.ts`

This file exports an interface `Item` which represents the structure of a shopping list item. It includes properties such as `id` (numeric key), `description`, `quantity`, `unit`, and `purchased` (boolean indicating whether the item has been purchased or not).

### `src/routes/itemRoutes.ts`

This file exports a function `setRoutes` which sets up the routes for the shopping list API. It maps the CRUD operations to the corresponding methods in the `ItemController`.

### `src/app.ts`

This file is the entry point of the application. It creates an instance of the Express app, sets up middleware, and registers the item routes.

### `tsconfig.json`

This file is the configuration file for TypeScript. It specifies the compiler options and the files to include in the compilation.

### `package.json`

This file is the configuration file for npm. It lists the dependencies and scripts for the project.

### `README.md`

This file contains the documentation for the project.

## Getting Started

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Configure the Azure Storage settings in `src/config/azureConfig.ts`.
4. Start the server using `npm start`.

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