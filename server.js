import express from "express";
import path from "path";
import { fileURLToPath } from "url";
// const mysql = require("mysql");

import logger from "./middleware/logger.js";
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/error.js";

import books from "./routes/books.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const PORT = process.env.PORT || 5000;
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "rlib",
// });

// connection.connect((err) => {
//   if (err) {
//     throw err;
//   }

//   console.log("Connected to the database");
// });
// global.db = connection;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(logger);

app.use("/api/books", books);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
