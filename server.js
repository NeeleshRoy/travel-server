const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const express_graphql = require('express-graphql');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const schema = require('./graphql/schemas')
const rootValue = require('./graphql/resolvers')
const connectToDb = require('./database/connect');

const User = require('./database/models/User');
const routes = require('./routes');

require('dotenv').config();

// Create an express server and a GraphQL endpoint
const app = express();
app.use(helmet());
app.use(cors());
app.use(morgan(process.env.NODE_ENV === "production" ? "tiny" : "common"))

app.use('/graphql', express_graphql({
    schema,
    rootValue,
    graphiql: process.env.NODE_ENV !== "production"
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(async (req, res, next) => {
    if (req.headers["x-access-token"]) {
        const accessToken = req.headers["x-access-token"];
        const { userId, exp } = await jwt.verify(accessToken, process.env.JWT_SECRET);
        // Check if token has expired
        if (exp < Date.now().valueOf() / 1000) {
            return res.status(401).json({ error: "JWT token has expired, please login to obtain a new one" });
        }
        res.locals.loggedInUser = await User.findById(userId); next();
    } else {
        next();
    }
});

app.use('/api', routes);

connectToDb().then(() => {
    app.listen(process.env.PORT, () => console.log(`Express GraphQL Server Now Running On localhost:${process.env.PORT}/graphql`));
}).catch(err => console.error(err))