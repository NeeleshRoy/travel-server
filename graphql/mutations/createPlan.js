const Plan = require('../../database/models/Plans')
const Consultant = require('../../database/models/Consultant')
const createPlan = async (args) => {
  const {
    name,
    overview,
    location,
    price,
    minPrice,
    prerequisites = [],
    days,
    inclusions = [],
    specialPlaces = [],
    photos = [],
    vlog = "",
    consultantId,
    itinerary = []
  } = args.planInput;

  const plan = new Plan({
    name,
    overview,
    location,
    price,
    minPrice,
    prerequisites,
    days,
    inclusions,
    specialPlaces,
    photos,
    vlog,
    consultantId,
    itinerary: itinerary || JSON.parse(itinerary)
  })

  try {
    const result = await plan.save();
    const consultant = await Consultant.findById(consultantId);
    await consultant.plans.push(result.id);
    await consultant.save();

    return { ...result._doc, _id: result.id };
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = createPlan;