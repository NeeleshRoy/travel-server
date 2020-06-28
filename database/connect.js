const mongoose = require('mongoose');

const connectToDb = async () => {
    const connectionUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
    const options = {
        keepAlive: true,
        useNewUrlParser: true,
        autoIndex: false,
        useUnifiedTopology: true
      };

    try {
        await mongoose.connect(connectionUrl, options);
    } catch (e) {
        console.error(e)
    }
}

module.exports = connectToDb