import express from "express";
import { configDotenv } from "dotenv";
import { dbConnector } from "./db/db.js";
import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

configDotenv();
const app = express();

app.get("/", (req, res) => {
  return res.send("hello");
});

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
