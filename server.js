let express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    reload = require('express-livereload'),
    mainCtrl = require('./mainCtrl'),
    port = 8008;

app.use(bodyParser.json());
app.use(cors());

// give me the public/index.html
app.use(express.static(`${__dirname}/public`));

// Products
app.get('/api/products', mainCtrl.productsCtrl.getProducts);
app.get('/api/product/:id', mainCtrl.productsCtrl.getProduct);
app.post('/api/product', mainCtrl.productsCtrl.addProduct);
app.put('/api/product/:id', mainCtrl.productsCtrl.updateProduct);
app.delete('/api/product/:id', mainCtrl.productsCtrl.removeProduct);



reload(app, config={});

app.listen(port, () => {
  console.log('listening on port ' + port);
})
