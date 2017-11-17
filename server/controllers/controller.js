module.exports= {
  getProducts: (req, res, next)=> {
    const dbInstance= req.app.get('db');
    dbInstance.get_products([req.params.id])
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
    dbInstance.get_products_by_search([req.params.searchVal])
      .then(products=> res.status(200).json(products))
      .catch( ()=> res.status(500).json());
  },
  addToCart: (req, res, next)=> {
    const dbInstance= req.app.get('db');
    const {user, product_name, product_price} = req.body;
    dbInstance.add_to_cart([user.id, product_name, product_price])
    .then(cart=> res.status(200).json(cart))
    .catch( ()=> res.status(500).json());
  }
}
