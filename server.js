const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const initDatabase = require('./app/init/db');

require('dotenv').config();

const app = express();

const corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions));
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//DB
initDatabase();

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Banjarey administration" });
});

require('./app/routes/auth.routes')(app);
require('./app/routes/consultant.routes')(app);
require('./app/routes/plan.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});