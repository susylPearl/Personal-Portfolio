const express = require('express');

const app = express();
const route = require("./route");

const port = 9000;
app.use("/", route);
app.listen(process.env.PORT || port, () => console.log(`Server running on port ${port}`));

