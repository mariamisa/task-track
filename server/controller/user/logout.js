const logoutController = (req, res) => {
  res.clearCookie('token').json({
    message: 'Logout Successful',
  });
};

module.exports = logoutController;
