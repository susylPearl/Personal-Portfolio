const express = require('express');
const app = express();
const route = require("./route");

const port = 5000;
app.use("/", route);

app.listen(port,  () => {
    console.log( `Server Running at ${port}`);
})