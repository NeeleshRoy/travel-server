const graphql = require('graphql');
const schema = graphql.buildSchema(`
    type RootQuery {
        planById(id: ID!): Plan
        plansByConsultant(id: ID!): [Plan]
    }

    type RootMutation {
        createPlan(planInput: PlanInput): Plan
        editPlan(editPlanInput: EditPlanInput): Plan
        createConsultant(consultantInput: ConsultantInput): Consultant
    }

    input ConsultantInput {
        firstname: String!
        lastname: String!
        primaryPhone: String!
        travelXp: Float!
        about: String!
        primaryPlaces: [String]!
        profilePicture: String
        email: String
        social: [String]
        plans: [String]
        profession: String
        tags: [String]
        ratings: String
        reviews: [String]
    }

    input EditPlanInput {
        _id: ID!
        name: String
        overview: String
        location: String
        price: String
        minPrice: String
        prerequisites: [String]
        days: Int
        inclusions: [String]
        specialPlaces: [String]
        photos: [String]
        vlog: String
        itinerary: [String]
    }

    input PlanInput {
        name: String!
        overview: String!
        location: String!
        price: String!
        minPrice: String!
        prerequisites: [String]
        days: Int!
        inclusions: [String]
        specialPlaces: [String]
        photos: [String]
        vlog: String
        consultantId: String!
        itinerary: [String]
    }

    type Afternoon {
        detail: String
        price: String
    }
    
    type Evening {
        detail: String
        price: String
    }
    
    type Morning {
        detail: String
        price: String
    }
    
    type Itinerary {
        afternoon: [Afternoon]
        evening: [Evening]
        morning: [Morning]
    }
    type Plan {
        _id: ID!
        name: String!
        overview: String!
        location: String!
        price: String!
        minPrice: String!
        prerequisites: [String]
        days: Int!
        inclusion: [String]
        specialPlaces: [String]
        photos: [String]
        vlog: [String]
        consultantId: ID!
        itinerary: [Itinerary]
    }

    type Consultant {
        _id: ID!
        firstname: String!
        lastname: String!
        primaryPhone: String!
        travelXp: Float!
        about: String!
        primaryPlaces: [String]!
        profilePicture: String
        email: String
        social: [String]
        plans: [String]
        profession: String
        tags: [String]
        ratings: String
        reviews: [String]
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);

module.exports = schema