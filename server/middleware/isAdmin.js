const checkIsAdmin = (req, res, next) => {
  if (req.user.is_admin === false) { return res.status(403).json({ status: 403, error: 'Forbidden Access: You need to be an Admin to gain access' }); }
  return next();
};
export default checkIsAdmin;
