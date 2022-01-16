const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book");

router.get("/", bookController.getBooks);
router.get("/:id", bookController.getBook);
router.post("/", bookController.postBook);
router.put("/:id", bookController.putBook);
router.patch("/:id", bookController.patchBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;