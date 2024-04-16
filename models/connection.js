const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://axelh33:26070404aHbH%21%3F@cluster0.urpgntd.mongodb.net/tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database connected'))

  .catch(error => console.error(error));