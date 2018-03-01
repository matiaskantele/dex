const app = require("./app");
const logger = require("./logger");

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
  logger.log("info", `Running on http://localhost:${PORT}`)
);
