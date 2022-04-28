const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const jsonParser = express.json();
app.use(jsonParser);
app.use("/users", userRouter);
app.use("/images", imageRouter);

app.listen(port, () => console.log(`App listening on port ${port}!`));

// In the top-level index.js file:
// Import the ./routers/image as imageRouter and ./routers/user as userRouter.
// Register them both to their corresponding root path (/images and /users).
