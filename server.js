const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const express_graphql = require('express-graphql');
const schema = require('./graphql/schemas')
const rootValue = require('./graphql/resolvers')
const connectToDb = require('./database/connect');

require('dotenv').config();

// Create an express server and a GraphQL endpoint
const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan(process.env.NODE_ENV === "production" ? "tiny": "common"))

app.use('/graphql', express_graphql({
    schema,
    rootValue,
    graphiql: true
}));

connectToDb().then(() => {
    app.listen(process.env.PORT, () => console.log(`Express GraphQL Server Now Running On localhost:${process.env.PORT}/graphql`));
}).catch(err => console.error(err))