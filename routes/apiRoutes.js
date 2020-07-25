const router = require('express').Router();

const db = require('../models');

router.get('/api/workouts', (req, res) => {
    db.Workout.find({})
        .then((dbWorkout) => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(500).json(err)
        });
});

router.put('/api/workouts/:id', (req, res) => {
    db.Workout.updateOne(
        { _id: req.params.id },
        { $push: { exercises: req.body } }
    )
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(500).json(err)
        });
});

router.post('/api/workouts', (req, res) => {
    db.Workout.create({})
        .then((dbWorkout) => {
            console.log(dbWorkout, 'workout posted');
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(500).json(err)
        });
});

router.get('/api/workouts/range', (req, res) => {
    db.Workout.find({}).limit(7)
        .then((dbWorkout) => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(500).json(err)
        });
});

module.exports = router;
