const logoutController = (req, res) => {
  res.clearCookie('token').json({
    title: 'Logout Successful',
  });
};

module.exports = logoutController;
