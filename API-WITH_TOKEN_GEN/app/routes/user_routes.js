const { authJwt } = require("../middleware/jwt-token");
const controller = require("../controllers/con");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Verify that allAccess and userBoard functions are defined in the controller
  if (controller.allAccess && controller.userBoard) {
    app.get("/api/test/all", controller.allAccess);
    app.get("/api/test/user", [authJwt], controller.userBoard);
  } else {
    console.error("Controller functions are not defined properly.");
  }
};
