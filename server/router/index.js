const router = require('express').Router();

const protectMiddleware = require('../middleware/auth/checkToken');
const publicRoutes = require('./publicRoutes');
const users = require('./users');
const tasks = require('./tasks');
const visits = require('./visits');
const payments = require('./payments');
const comments = require('./comments');

// public endpoints
router.use(publicRoutes);
// protect endpoints
router.use(protectMiddleware);
// rest routes
router.use(users);
router.use(tasks);
router.use(visits);
router.use(payments);
router.use(comments);

module.exports = router;
