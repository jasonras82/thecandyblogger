angular.module('app').service('cartSvc', function ($http, $q) {

  this.removeItem = (item, cart) => {
    // console.log(item);
    // console.log(cart);
    for(let i = 0; i < cart.length; i ++) {
      let index = cart.indexOf(item);
      console.log(index);
      return cart.splice(index, 1);
      // if(cart[i].product_id === item.product_id) {
      // }
    }
  }

});
