const { Router } = require("express");
const user = require("../models/users");

const router = new Router();

router.get("/", async (request, response, next) => {
  try {
    const users = await user.findAll();
    response.send(users);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;

// Register a GET / route that responds with all the images/users.
// Export the router.
// In the top-level index.js file:
// Import the ./routers/image as imageRouter and ./routers/user as userRouter.
// Register them both to their corresponding root path (/images and /users).
