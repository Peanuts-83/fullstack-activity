'.env' file must be set at root, containing credentials to a valid mongoDB database:

DB_user=<user_name>
DB_password=<password>
DB_address=<address>


The app should import 'dotenv' package and then access '.env' credentials this way:

require('dotenv').config();   // credentials secured to .env

// connect MongoDB
mongoose.connect(`mongodb+srv://${process.env.DB_user}:${process.env.DB_password}@${process.env.DB_address}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('MongoDB connected!'))
    .catch(error => console.log('MongoDB NOT connected: ', error));
