import userObjects from '../helpers/userObjects';

const { getCurrentUser } = userObjects;

const checkUserReg = key => async (req, res, next) => {
  try {
    const user = await getCurrentUser(key, req.body[key].trim());
    if (!user) { return next(); }
    return res.status(409).json({ status: 'error', error: `The user with this ${key} has already registered` });
  } catch (error) { return next(error); }
};

export default checkUserReg;
