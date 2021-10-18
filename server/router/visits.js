const router = require('express').Router();

const {
  getVisits, getUserVisits, addVisit, updateVisit, deleteVisit,
} = require('../controller');

router.get('/visits', getVisits);
router.get('/user/visits', getUserVisits);
router.post('/visits', addVisit);
router.patch('/visits/:id', updateVisit);
router.delete('/visits/:id', deleteVisit);

module.exports = router;
