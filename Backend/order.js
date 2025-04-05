const express = require("express");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid"); // Unique order IDs

const router = express.Router();
const ordersFile = path.join(__dirname, "../data/orders.json");

// Helper function to read orders
const getOrders = () => {
    if (!fs.existsSync(ordersFile)) {
        fs.writeFileSync(ordersFile, "[]");
        return [];
    }
    const data = fs.readFileSync(ordersFile, "utf-8");
    return JSON.parse(data);
};

// Helper function to save orders
const saveOrders = (orders) => {
    fs.writeFileSync(ordersFile, JSON.stringify(orders, null, 2));
};

// ✅ Place Order Route
router.post("/place", (req, res) => {
    const { userEmail, items, total } = req.body;

    if (!userEmail || !Array.isArray(items) || items.length === 0 || !total) {
        return res.status(400).json({ message: "Invalid order data" });
    }

    let orders = getOrders();
    const newOrder = {
        id: uuidv4(),
        userEmail,
        items,
        total,
        status: "Pending",
        placedAt: new Date().toISOString(),
    };

    orders.push(newOrder);
    saveOrders(orders);

    res.status(201).json({ message: "Order placed successfully", order: newOrder });
});

// ✅ Get Orders for User
router.get("/:email", (req, res) => {
    const { email } = req.params;
    const orders = getOrders();
    const userOrders = orders.filter(order => order.userEmail === email);

    if (userOrders.length === 0) {
        return res.status(404).json({ message: "No orders found for this user" });
    }

    res.json(userOrders);
});

// ✅ Update Order Status
router.put("/update/:orderId", (req, res) => {
    const { orderId } = req.params;
    const { status } = req.body;
    let orders = getOrders();

    const orderIndex = orders.findIndex(order => order.id === orderId);
    if (orderIndex === -1) {
        return res.status(404).json({ message: "Order not found" });
    }

    orders[orderIndex].status = status || "Pending";
    saveOrders(orders);

    res.json({ message: "Order status updated", order: orders[orderIndex] });
});

module.exports = router;
