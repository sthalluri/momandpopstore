App.CartController = Ember.ArrayController.extend({
    // the initial value of the `search` property
    actions:{
        removeFromCart:function (id) {
            this.cartItems.pop();
        },

        checkout:function () {
            //Create an order and send it to the server

            //Order created successfully, now clear the cart
            this.clearCart();
            this.transitionToRoute('checkout');
        }
    },

    addItemToCart:function (item) {
        var cartItem = this.store.getById('cartitem',item.id);
        if(cartItem){
            cartItem.set('quantity', cartItem.get('quantity')+1);
        } else{
            this.store.push('cartitem',{
                id:item.id,
                name:item.name,
                quantity:1,
                price:item.price,
                imageURL:item.imageURL
            } );
        }
        this.cartUpdated();
    },

    clearCart:function () {
        // Cant update the bound variables directly
        this.set('cartItems', []);
        this.cartUpdated();
    },

    cartUpdated:function () {
        this.store.find('cartitem').then(function(items) {
            $('#cartCountSpan').text(items.get('length'));
        });
    },

    totalCost:function(){
        this.store.find('cartitem').then(function(items) {
            var value = 0;
            items.forEach(function(item){
                 value += item.get('quantity')*item.get('price');
            });
            $('#totalCostSpan').text(value);
        });
        return 0;
    }.property('@each.quantity')
});