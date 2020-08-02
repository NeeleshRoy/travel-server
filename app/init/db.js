const db = require('../models');
const dbConfig = require('../config/db.config');
require('dotenv').config();

const Role = db.role;

const initDatabase = () => {
    process.env.NODE_ENV === 'production' ? connectProduction() : connectLocal();
}

const connectProduction = async () => {
    const connectionUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
    const options = {
        keepAlive: true,
        useNewUrlParser: true,
        autoIndex: false,
        useUnifiedTopology: true
    };

    try {
        await mongoose.connect(connectionUrl, options);
        console.log("Successfully connected to MongoDB.");
        initial();
    } catch (e) {
        console.error(e)
    }
}

const connectLocal = () => {
    db.mongoose
        .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log("Successfully connected to MongoDB.");
            initial();
        })
        .catch(err => {
            console.error("Connection error", err);
            process.exit();
        });
}

const initial = () => {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "consultant"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'consultant' to roles collection");
            });

            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'admin' to roles collection");
            });
        }
    });
}

module.exports = initDatabase;