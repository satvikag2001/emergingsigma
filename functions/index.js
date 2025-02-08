const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const app = express();

admin.initializeApp();

// Your existing routes go here (from server.js)
app.get("/", (req, res) => {
  res.send("<h1>Welcome to My Website hosted on Firebase!</h1>");
});

// More routes as needed

// Firebase function to handle the express app
exports.app = functions.https.onRequest(app);
