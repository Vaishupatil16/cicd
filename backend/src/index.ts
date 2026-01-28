import express from "express";
import cors from "cors";
import { metricsHandler, httpRequestCounter } from "./metrics";

const app = express();
app.use(cors());
app.use(express.json());

// Count requests (middleware)
app.use((req, res, next) => {
  res.on("finish", () => {
    httpRequestCounter.inc({
      method: req.method,
      route: req.path,
      status: res.statusCode
    });
  });
  next();
});

// 👇 ADD THIS LINE (metrics endpoint)
app.get("/metrics", metricsHandler);

// existing routes stay as they are
app.get("/", (req, res) => {
  res.send("Backend running");
});

export default app;
