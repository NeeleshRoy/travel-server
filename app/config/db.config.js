require('dotenv').config();

let dbConfig;
if (process.env.NODE_ENV === 'production') {
    dbConfig = {
        HOST: process.env.DB_HOST,
        USER: process.env.DB_PORT,
        PASSWORD: process.env.DB_PASSWORD,
        NAME: process.env.DB_NAME
    };
} else {
    dbConfig = {
        HOST: "localhost",
        PORT: 27017,
        DB: "travel-server-development"
    };
}


module.exports = dbConfig;