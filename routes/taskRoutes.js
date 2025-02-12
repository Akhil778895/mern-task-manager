const express = require("express");
const { createTask, getTasks, updateTask, deleteTask } = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");



const router = express.Router();

router.route("/tasks")
    .post(authMiddleware, createTask)
    .get(authMiddleware, getTasks);

router.route("/tasks/:id")
    .put(authMiddleware, updateTask)
    .delete(authMiddleware, deleteTask);

module.exports = router;
