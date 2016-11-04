let express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    port = 8008,
    mainCtrl = require('./nodejs/mainCtrl')

app.use(bodyParser.json());
app.use(cors());

// GET


// POST


// PUT


// DELETE



app.listen(port, () => {
  console.log('listening on port ' + port);
})
