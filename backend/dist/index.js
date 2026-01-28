const express = require("express");
const cors = require("cors");
const client = require("prom-client");

const products = require("./routes/products");
const orders = require("./routes/orders");

const app = express();
app.use(cors());
app.use(express.json());

// Prometheus default metrics
client.collectDefaultMetrics();

// Prometheus metrics endpoint
app.get("/metrics", async (req, res) => {
    res.set("Content-Type", client.register.contentType);
    res.end(await client.register.metrics());
});

app.use("/api/products", products);
app.use("/api/orders", orders);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});
