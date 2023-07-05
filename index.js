const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const route = express.Router();
const port = 8000;
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');

dotenv.config({ path: './.env' });

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

db.connect( (error) => {
  if(error){
      console.log(error);
  } else{
      console.log('MySQL Connected...');
  }
});

// set views file
app.set('views', path.join(__dirname, 'views'));
// set view engine
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// set folder public sebagai static folder untuk static file
app.use('/assets', express.static(__dirname + '/public'));

// use routes
const mahasiswaRoutes = require('./routes/mahasiswaRoutes');
app.use('/', mahasiswaRoutes);


// server listening
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
