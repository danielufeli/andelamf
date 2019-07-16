export default (err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  process.on('unhandledRejection', (ex) => {
    throw ex;
  });

  res.status(404).json({ status: 'error', error: `Route '${req.url}' Not found.` });

  res.status(500).json({ status: 'error', error: 'Something Went Wrong Contact The Administrator' });
};
