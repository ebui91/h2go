const express= require('express');
const { json }= require('body-parser');
const cors= require('cors');
const session= require('express-session');
const massive= require('massive');
const passport= require('passport');
const Auth0Strategy= require('passport-auth0');
const connectionString= require('../config.js').massive;
const { secret }= require('../config.js').session;
const { domain, clientID, clientSecret }= require("../config").auth0;
const controller= require('./controllers/controller');
const cart_controller= require('./controllers/cart_controller');

const port= 3001;
const app= express();

//Serve public files to server whenever we are done building.
// app.use(express.static(`${__dirname}/build`));


massive(connectionString)
.then(dbInstance=> app.set('db', dbInstance))
.catch(console.log);


//Middlewares
app.use(json());
app.use(cors());
app.use(session({
  secret,
  resave: false,
  saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Auth0Strategy(
    {
      domain,
      clientID,
      clientSecret,
      callbackURL: '/login'
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      app.get('db')
        .getUserByAuthId([profile._json.user_id])
        .then(response=> {
          if(!response[0]) {
            const db= app.get('db')
              db.createUserByAuth([profile._json.user_id, profile._json.name])
              .then(created=> {
                return done(null, created[0]);
              });
          }else{
            return done(null, response[0]);
          }
        });
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.get('/login', passport.authenticate('auth0', {
    successRedirect: "http://localhost:3000/"
  })
);

//Endpoints
app.get('/products', controller.getProducts); //Automatically sorts products by name.
app.get('/products/name', controller.getProducts);
app.get('/products/price', controller.getProductsByPrice);
app.get('/products/price-desc', controller.getProductsByPriceDesc);
app.get('/products/pH', controller.getProductsByPh);
app.get('/products/:search', controller.getProductsBySearch);
app.get('/users', controller.getUsers);
app.get('/api/details/:id', controller.getProductById);
app.get('/cart/:id', controller.getUserCart);
app.get('/cart/total/:id', controller.getCartTotal);
app.post('/cart', controller.addToCart);

app.get('/me', function(req, res) {
  if (!req.user) {return res.status(404)};
  res.status(200).json(req.user);
});



app.listen(port, ()=> {
  console.log(`Server is listening on port: ${port}`);
});
