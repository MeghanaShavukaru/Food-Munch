const express = require("express");
const admin = require("./firebase"); // Connects to Firebase
const router = express.Router();

// Signup route
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await admin.auth().createUser({ email, password });
    res.status(201).json({ message: "User created", uid: user.uid });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Test route
router.get("/test", (req, res) => {
  res.send("Firebase Auth is working!");
});

module.exports = router;
