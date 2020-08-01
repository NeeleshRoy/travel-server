const objectId = require('mongoose').Types.ObjectId;
const { createPlan, editPlan } = require('../mutations');
const Plan = require('../../database/models/Plans');

const getPlanById = async (args) => {
    const { id } = args;
    if (!objectId.isValid(id)) return new Error('ID is not valid');
    console.log(args)
    try {
        const result = await Plan.findById(id);
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const getPlansByConsultant = async (args) => {
    const { id } = args;
    if (!objectId.isValid(id)) return new Error('Consultant ID is not valid');
    try {
        const result = await Plan.find({ consultantId: objectId(id) });
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const root = {
    planById: getPlanById,
    plansByConsultant: getPlansByConsultant,
    createPlan,
    editPlan
};

module.exports = root
