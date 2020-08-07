const controller = require("../controllers/plan.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/consultant/plan", controller.savePlan);
    app.get("/api/consultant/plans", controller.getPlans);
    app.put("/api/consultant/plan/edit/:id", controller.editPlan);
    app.delete("/api/consultant/plan/edit/:id", controller.deletePlan);
};