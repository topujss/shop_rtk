const {connect} = require('mongoose');

// create mongodb connection
const mongoDBConnect = async () => {
  try {
    const connectMe = await connect(process.env.MONGO_STRING);
    console.log(`mongodb connection succeed`.bgGreen);
  } catch (error) {
    console.log(`${error.message}`.bgRed);
  }
};

// export mongodb
module.exports = mongoDBConnect;
