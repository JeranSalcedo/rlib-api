import data from "../TEMP_SERVER.json" with { type: "json" };

let books = data.books;

// @desc Get all books
// @route GET /api/books
export const getBooks = (req, res, next) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(books.slice(0, limit));
  }

  res.status(200).json(books);
};

// @desc Get single book
// @route GET /api/books/:id
export const getBook = (req, res, next) => {
  const id = parseInt(req.params.id);
  const book = books.find((book) => book.id === id);

  if (!book) {
    const err = new Error(`A book with the id of ${id} was not found.`);
    err.status = 404;

    return next(err);
  }

  res.status(200).json(book);
};

// @desc Create new book
// @route POST /api/books
export const createBook = (req, res, next) => {
  const newBook = { id: books.length + 1, title: req.body.title };

  if (!newBook.title) {
    const err = new Error("Please include a title");
    err.status = 400;

    return next(err);
  }

  res.status(201).json([...books, newBook]);
};

// @desc Update book
// @route PUT /api/books/:id
export const updateBook = (req, res, next) => {
  const id = parseInt(req.params.id);
  const book = books.find((book) => post.id === id);

  if (!book) {
    const err = new Error(`A book with the id of ${id} was not found.`);
    err.status = 404;

    return next(err);
  }

  book.title = req.body.title;
  res.status(200).json(books);
};

// @desc Delete book
// @route DELETE /api/books/:id
export const deleteBook = (req, res, next) => {
  const id = parseInt(req.params.id);
  const book = books.find((book) => post.id === id);

  if (!book) {
    const err = new Error(`A book with the id of ${id} was not found.`);
    err.status = 404;

    return next(err);
  }

  books = books.filter((book) => book.id !== id);
  res.status(200).json(books);
};
