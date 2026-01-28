import express from "express";
import cors from "cors";
import productRoutes from "./routes/products";
import orderRoutes from "./routes/orders";
import client from "prom-client";

const app = express();

app.use(cors());
app.use(express.json());

// Prometheus metrics
client.collectDefaultMetrics();
const register = client.register;

app.get("/metrics", async (req, res) => {
  res.setHeader("Content-Type", register.contentType);
  res.end(await register.metrics());
});

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
