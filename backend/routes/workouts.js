const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// GET all workouts
router.get("/", getWorkouts);

// GET a single workout
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);

// DElETE a single workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a single workout" });
});

// UPDATE single workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a single workout" });
});

module.exports = router;
