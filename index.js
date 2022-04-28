const express = require("express");

const port = 4000;

const app = express();

app.use(router);

app.listen(port, () => console.log(`App listening on port ${port}!`));

process.env.PORT || 4000;
