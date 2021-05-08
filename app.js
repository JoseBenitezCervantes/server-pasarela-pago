const express = require('express');

const app = express();
const routes = require('./routes/index.js');
var cors = require('cors')

// settings
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 4000);
app.use(express.json())
app.use(cors())

// routes
app.use(routes);

// bootstraping the app
app.listen(app.get('port'), () => {
    console.log("server port", app.get('port'))
});