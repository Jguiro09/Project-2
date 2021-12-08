const router = require('express').Router();
const compression = require('compression');
const express = require('express');
const app = express();

app.use(compression());

const programRoutes = require('./program-routes');
const userRoutes = require('./user-routes');
const scoreRoutes = require('./score-routes');
const sentRoutes = require('./sent-routes');


router.use('/program', programRoutes);
router.use('/users', userRoutes);
router.use('/score', scoreRoutes);
router.use('/sent', sentRoutes);


module.exports = router;