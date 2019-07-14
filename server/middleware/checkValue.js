const checkValue = num => async (req, res, next) => {
  try {
    const valuesLength = Object.keys(req.body).length;
    return (valuesLength > Number(num) ? res.status(400).json({ status: 400, error: 'The Values of your request as exceeded the required values' }) : next());
  } catch (error) { return next(error); }
};

export default checkValue;
