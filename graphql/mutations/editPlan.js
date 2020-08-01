const Plan = require('../../database/models/Plans')
const _ = require('lodash');
const editPlan = async (args) => {
  const cleaned = _.pickBy(args.editPlanInput, _.identity);
  const { _id } = cleaned;
  delete cleaned._id;
  try {
    const result = await Plan.findByIdAndUpdate(_id, cleaned)
    return { success: true, _id: result.id, consultantId: result.consultantId.toString() };
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = editPlan;