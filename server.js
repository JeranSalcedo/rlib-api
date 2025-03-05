import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";

import logger from "./middleware/logger.js";
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/error.js";

import users from "./routes/users.js";
import books from "./routes/books.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
};

const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(logger);

app.use("/api/users", cors(corsOptions), users);
app.use("/api/books", cors(corsOptions), books);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
