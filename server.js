let express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mainCtrl = require('./mainCtrl'),
    port = 8008;

app.use(bodyParser.json());
app.use(cors());

// Products
app.get('/api/products', mainCtrl.productsCtrl.getProducts);
app.get('/api/product/:id', mainCtrl.productsCtrl.getProduct);
app.post('/api/product', mainCtrl.productsCtrl.addProduct);
app.put('/api/product/:id', mainCtrl.productsCtrl.updateProduct);
app.delete('/api/product/:id', mainCtrl.productsCtrl.removeProduct);

// POST


// PUT


// DELETE



app.listen(port, () => {
  console.log('listening on port ' + port);
})
