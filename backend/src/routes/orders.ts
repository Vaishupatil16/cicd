import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  const order = req.body;
  console.log("Order received:", order);

  res.json({
    message: "Order placed successfully",
    order
  });
});

export default router;
