const router = require('express').Router();

const { getVisits, getUserVisits, addVisit } = require('../controller');

router.get('/visits', getVisits);
router.get('/user/visits', getUserVisits);
router.post('/visits', addVisit);
// router.patch('/visits/:id', isAuthController);
// router.delete('/visits/:id', isAuthController);

module.exports = router;
