const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

// routes
const routes = require("./routes");

const app = express();

app.use(helmet());
app.use(morgan("combined"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(routes);

app.listen(3000, () => console.log("server listening on port 3000"));
