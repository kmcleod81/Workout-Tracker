const router = require('express').Router();

const db = require('../models');

router.get('/workouts', (req, res) => {
    db.Workout.findOne({}, {}, { sort: { day: -1 } })
        .then((dbWorkout) => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(500).json(err)
        });
});

module.exports = router;
