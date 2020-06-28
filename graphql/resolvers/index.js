const mock = require('../../mock/plans');
const { createPlan, editPlan } = require('../mutations');

const getPlan = (args) => {
    const id = args.id;
    return mock.filter(plan => {
        return plan.id == id;
    })[0];
}
const getPlans = function (args) {
    if (args.id) {
        const id = args.id;
        return mock.filter(plan => plan.consultantId === id);
    } else {
        return mock;
    }
}
const root = {
    plan: getPlan,
    plans: getPlans,
    createPlan,
    editPlan
};

module.exports = root
