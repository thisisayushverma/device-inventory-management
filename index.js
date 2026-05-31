import express from "express";
import { configDotenv } from "dotenv";
import { dbConnector } from "./db/db.js";
import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

configDotenv();
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.get("/health", (req, res) => {
  return res.status(200).json({
    status: true,
  });
});

import deviceRoutes from "./routes/device.routes.js";
import typeRoutes from "./routes/types.routes.js";
import { reqLogger } from "./middleware/reqLogger.js";

app.use(reqLogger);
app.use("/api/types", typeRoutes);
app.use("/api/devices",deviceRoutes);

dbConnector()
  .then(() => {
    app.listen(5000, () => {
      console.log("server is running on port 5000");
    });
  })
  .catch((error) => {
    console.log("error -", error);
    process.exit(1);
  });
