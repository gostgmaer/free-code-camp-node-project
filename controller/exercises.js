const User = require("../models/users");
const Exercise = require("../models/exercises");

const createExcercise = async (req, res) => {
  try {
    const { description, duration, date } = req.body;
    const user = await User.findById(req.params._id);
    if (!user) return res.status(404).json({ error: "User not found" });

    const exercise = new Exercise({
      user: user._id,
      description,
      duration: parseInt(duration),
      date: date ? new Date(date) : new Date(),
    });

    await exercise.save();

    res.json({
      _id: user._id,
      username: user.username,
      date: exercise.date.toDateString(),
      duration: exercise.duration,
      description: exercise.description,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getExcercise = async (req, res) => {
  try {
    const user = await User.findById(req.params._id);
    if (!user) return res.status(404).json({ error: "User not found" });

    const { from, to, limit } = req.query;
    const query = { user: user._id };

    if (from || to) {
      query.date = {};
      if (from) query.date.$gte = new Date(from);
      if (to) query.date.$lte = new Date(to);
    }

    let exercises = Exercise.find(query).select("-__v -tid");

    if (limit) exercises = exercises.limit(parseInt(limit));
    const logs = await exercises.exec();

    res.json({
      _id: user._id,
      username: user.username,
      count: logs.length,
      log: logs.map((ex) => ({
        description: ex.description,
        duration: ex.duration,
        date: ex.date.toDateString(),
      })),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createExcercise,
 getExcercise
};
