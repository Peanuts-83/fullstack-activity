<h1>Backend setup with node.js / CRUD implementation</h1>
This is a resolved evaluation about creating a REST API using Node, Express and MongoDB. <br><br>
Original unresolved exercice shown here: <br> <a href="https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/exercises/3732" target="blank">
```diff
! https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/exercises/3732
```</a>

<h1>Added securization for Git-repos - dotenv</h1>
In order not to expose your confidential credentials to MongoDB, please use the <b>dotenv</b> module. <br><br>
Reference documentation: <br>
<a href="https://github.com/motdotla/dotenv" target="blank">
```diff
! https://github.com/motdotla/dotenv
```</a><br>
<h2>An '.env' file must be set at root, containing credentials to a valid mongoDB database:</h2>
```env
  DB_user=user_name
  DB_password=password
  DB_address=address
```
<br>
<h2>The app should import 'dotenv' package and then access '.env' credentials this way:</h2>
<b>Credentials secured to .env: </b><br>
```js
  require('dotenv').config();
```
<br><br>
<b>Connect MongoDB:</b> <br>
```js
  mongoose.connect(`mongodb+srv://${process.env.DB_user}:${process.env.DB_password}@${process.env.DB_address}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
      .then(() => console.log('MongoDB connected!'))
      .catch(error => console.log('MongoDB NOT connected: ', error));
```