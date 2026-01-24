"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_1 = require("../data/products");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.json(products_1.products);
});
exports.default = router;
