const router = require('express').Router();

const {
  getPayments, addPayment, updatePayment, deletePayment,
} = require('../controller');
const {
  paymentPermission,
} = require('../middleware/permission');

router.get('/payments', paymentPermission, getPayments);
router.post('/payments', paymentPermission, addPayment);
router.patch('/payments/:id', paymentPermission, updatePayment);
router.delete('/payments/:id', paymentPermission, deletePayment);

module.exports = router;
