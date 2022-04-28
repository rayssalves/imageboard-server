const { Router } = require("express");
const image = require("../models/image");

const router = new Router();

router.get("/", async (request, response, next) => {
  try {
    const images = await image.findAll();
    response.send(images);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
