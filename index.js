const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const routes = require('./routes/product_route')
const usermodel = require('./models/product')
const ejs = require('ejs');


mongoose.Promise = global.Promise;
const CONNECTION_URL = 'mongodb+srv://Esha:0wtR2WggVzAiE9un@cluster0.ygb7z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 8081;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);

const app = express();
app.use(morgan('combined '))
app.use(bodyParser.json())
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'ejs');

//app.use('/', routes);
routes(app);
console.log(mongoose.connection.readyState)






