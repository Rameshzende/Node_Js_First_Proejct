const { constant } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.json({ message: err.message, StackTrace: err.stack });

  switch (statusCode) {
    case constant.VALIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        message: err.message,
        StackTrace: err.stack,
      });
      break;
    case constant.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        StackTrace: err.stack,
      });
      break;
    case constant.UNAUTHORIZED:
      res.json({
        title: "Un Authorized",
        message: err.message,
        StackTrace: err.stack,
      });
      break;
    case constant.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        StackTrace: err.stack,
      });
    case constant.SERVER_NOT_FOUND:
      res.json({
        title: "Server Not Found",
        message: err.message,
        StackTrace: err.stack,
      });
      break;
    default:
        console.log('NO Error')
      break;
  }
};

module.exports = errorHandler;
