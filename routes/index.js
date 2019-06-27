const path = require("path");
const router = require("express").Router();
const booksController = require("../controllers/booksControllers");

router.route("/api/books")
  .get(booksController.findAll)
  .post(booksController.create);

router.route("/api/books/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;