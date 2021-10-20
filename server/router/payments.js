const router = require('express').Router();

const {
  getPayments, addPayment, updatePayment, deletePayment,
} = require('../controller');
const {
  paymentPermission,
} = require('../middleware/permission');

router.use(paymentPermission);

router.get('/payments', getPayments);
router.post('/payments', addPayment);
router.patch('/payments/:id', updatePayment);
router.delete('/payments/:id', deletePayment);

module.exports = router;
