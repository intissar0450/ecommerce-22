const roleCheck = (role) => (req, res, next) =>
  !role.includes(req.user.userRole)
    ? res.status(401).json('Fornidden')
    : next();
module.exports = roleCheck;
