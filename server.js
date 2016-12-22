let express = require('express');
let app = express();
let cors = require('cors');
let bodyParser = require('body-parser');
let session = require('express-session');
let reload = require('express-livereload');
let nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport('smtps://jason.raymond.sanders%40gmail.com:Testing123@smtp.gmail.com');
    // cookieParser
    // passport
    // passport-local
    // passport-facebook
    // config file (with secret and fb id/secret. add them to my .gitignore)
    // jsonwebtoken (jwt)
    // bcrypt local auth password hasing
let mainCtrl = require('./mainCtrl');
let port = process.env.PORT || 80;

    // setup e-mail data with unicode symbols
let mailOptions = {
    from: from, // sender address
    to: 'jason.raymond.sanders@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: text, // plaintext body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});

app.use(bodyParser.json());
app.use(cors());
// cookieParser
// passport.initialize
// passport.XX


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
