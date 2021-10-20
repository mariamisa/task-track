const router = require('express').Router();

// const {
//   getPayments, addPayments, updatePayments, deletePayments,
// } = require('../controller');
const {
  paymentPermission,
} = require('../middleware/permission');

router.use(paymentPermission);
router.get('/payments', (req, res) => {
  res.json({ msg: 'hi from payment route' });
});
// router.get('/payments', getPayments);
// router.post('/payments', addPayment);
// router.patch('/payments/:id', updatePayment);
// router.delete('/payments/:id', deletePayment);

module.exports = router;
