let db = require('./../nodejs/db');
module.exports = {
  getProducts(req, res) {
    db.products.products.read_products([], (err, response) => {
      res.status(200).json(response);
    })
  },
  getProduct(req, res) {
    db.products.read_product([req.params.id], (err, response) => {
      res.status(200).json(response);
    })
  },
  addProduct(req, res) {
    let newProduct = req.body;
    db.products.add_product([newProduct.name, newProduct.price, newProduct.image, newProduct.description, newProduct.product_category_id], (err, response) => {
      res.status(201).json({newProduct});
    });
  },
  updateProduct(req, res) {
    for(let key in req.body) {
      let sql;
      if(typeof req.body[key] === 'string') {
        sql = `update products set ${key}='${req.body[key]}' where product_id=${req.params.id}`;
      } else if (typeof req.body[key] === 'number') {
        sql = `update products set ${key}=${req.body[key]} where product_id=${req.params.id}`;
      }
      db.run(sql, (err, response) => {
      })
    }
    res.status(200).end();
  },
  removeProduct(req, res) {
    db.products.delete_product([req.params.id], (err, response) => {
      res.status(204).json(response);
    })
  }

};
