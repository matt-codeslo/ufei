if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "AWS") {
  require("dotenv").config();
}

const express = require("express");
const port = process.env.PORT;
const path = require("path");
const app = express();
const cache = require("cache-control");
// logging
const logger = require("./utilities/logger");
app.use((req, res, next) => {
  logger.info(`root.index: HTTP Request: ${req.method}, ${req.url}`);
  next();
});
// routes
const treeRoutes = require("./routes/tree");
const apiRoutes = require("./routes/api");
const { publicDecrypt } = require("crypto");

// end routes
const cacheOptions = {
  "/static/**": "public,max-age=0",
  "/**": "no-store, no-cache, must-revalidate, proxy-revalidate",
};
app.use(cache(cacheOptions));
app.use(express.static(path.join(__dirname, "client/build")));
app.use("/tree", treeRoutes);
app.use("/api", apiRoutes);
app.get("/*", (req, res) => {
  const options = {
    root: path.join(__dirname, "client/build"),
  };
  res.sendFile("index.html", options);
});

process.on('SIGINT', () => { console.log("Bye bye!"); process.exit(); })
app.listen(port, () => logger.info(`UFEI application listening on port ${port}.`));
