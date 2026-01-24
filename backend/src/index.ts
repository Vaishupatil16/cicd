import express from "express";
import cors from "cors";
import productRoutes from "./routes/products";
import orderRoutes from "./routes/orders";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
