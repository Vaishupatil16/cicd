"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/", (req, res) => {
    const order = req.body;
    console.log("Order received:", order);
    res.json({
        message: "Order placed successfully",
        order
    });
});
exports.default = router;
