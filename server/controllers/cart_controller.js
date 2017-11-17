
module.exports= {
  add: (req, res, next)=> {
    const { id }= req.query;
    let { cart }= req.session.user;

    const index= cart.findIndex(product=> product.id == id);
    if(index === -1){
      const selectedProduct= product.find(product=> product.id == id);
      cart.push(selectedProduct);
      req.session.user.total += selectedProduct.price
    }
    res.status(200).json(req.session.user);
  },

  delete: (req, res, next)=> {
    const { id }= req.query;
    let { cart }= req.session.user;

    const selectedProduct= cart.find(product=> product.id == id);
    if(selectedProduct){
      const i= cart.findIndex(product=> product.id == id);
      cart.splice(i,1);
      req.session.user.total -= selectedProduct.price;
    }
    res.status(200).json(req.session.user);
  },

  checkout: (req, res, next)=> {
    const { user }= req.session;
    user.cart= [];
    user.total= 0;

    res.status(200).send(req.session.user);
  }
}
