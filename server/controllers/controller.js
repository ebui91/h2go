module.exports= {
  getProducts: (req, res, next)=> {
    const dbInstance= req.app.get('db');
    dbInstance.get_products()
    .then(products=> res.status(200).json(products))
    .catch( ()=> res.status(500).json());
  },
  getUsers: (req, res, next)=> {
    const dbInstance= req.app.get('db');
    dbInstance.get_users()
      .then(users=> res.status(200).json(users))
      .catch( ()=> res.status(500).json());
  },
  getUser: (req, res, next)=> {
    const dbInstance= req.app.get('db');
    dbInstance.get_user([req.params.id])
      .then(user=> res.status(200).json(user))
      .catch( ()=> res.status(500).json());
  },
  getProductById: (req, res, next)=> {
    const dbInstance= req.app.get('db');
    dbInstance.get_product_by_id([req.params.id])
      .then(product=> res.status(200).json(product))
      .catch( ()=> res.status(500).json());
  },
  getProductsByPrice: (req, res, next)=> {
    const dbInstance= req.app.get('db');
    dbInstance.get_products_by_price()
      .then(products=> res.status(200).json(products))
      .catch( ()=> res.status(500).json());
  },
  getProductsByPriceDesc: (req, res, next)=> {
    const dbInstance= req.app.get('db');
    dbInstance.get_products_by_price_desc()
      .then(products=> res.status(200).json(products))
      .catch( ()=> res.status(500).json());
  },
  getProductsByPh: (req, res, next)=> {
    const dbInstance= req.app.get('db');
    dbInstance.get_products_by_ph()
      .then(products=> res.status(200).json(products))
      .catch( ()=> res.status(500).json());
  },
  getProductsBySearch: (req, res, next)=> {
    const dbInstance= req.app.get('db');
    dbInstance.get_products_by_search([req.params.search])
      .then(products=> res.status(200).json(products))
      .catch( ()=> res.status(500).json());
  },
  getUserCart: (req, res, next)=> {
    const dbInstance= req.app.get('db');
    dbInstance.get_user_cart([req.params.id])
      .then(cart=> res.status(200).json(cart))
      .catch( ()=> res.status(500).json());
  },
  getCartTotal: (req, res, next)=> {
    const dbInstance= req.app.get('db');
    dbInstance.get_cart_total([req.params.id])
      .then(total=> res.status(200).json(total))
      .catch( ()=> res.status(500).json());
  },
  addToCart: (req, res, next)=> {
    const dbInstance= req.app.get('db');
    const { user, product_name, product_price }= req.body;
    dbInstance.add_to_cart([user.id, product_name, product_price])
    .then(cart=> res.status(200).json(cart))
    .catch( ()=> res.status(500).json());
  },
  removeFromCart: (req, res, next)=> {
    const dbInstance= req.app.get('db');
    dbInstance.remove_from_cart([req.params.id])
    .then(cart=> res.status(200).json(cart))
    .catch( ()=> res.status(500).json());
  },
  deleteCart: (req, res, next)=> {
    const dbInstance= req.app.get('db');
    console.log(req.params);
    dbInstance.delete_cart([req.params.id])
    .then(cart=> res.status(200).json(cart))
    .catch( ()=> res.status(500).json());
  },
  postPayment: (req, res, next)=> {
    const dbInstance= req.app.get('db');
    const { user, amount }= req.body;
    dbInstance.post_payment([user.id, amount])
    .then(response=> res.status(200).json(response))
    .catch( ()=> res.status(500).json());
  }
}
