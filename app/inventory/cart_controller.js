App.CartController = Ember.ArrayController.extend({
    // the initial value of the `search` property
    cartItems:[],
    actions:{
        addToCart:function (item) {
            this.cartItems.push({
                id:item.get('id'),
                name:item.get('name')
            });
        },

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
        this.cartItems.push({
            id:item.id,
            name:item.name,
            quantity:item.quantity,
            price:item.price
        });
        this.cartUpdated();
    },

    clearCart:function () {
        // Cant update the bound variables directly
        this.set('cartItems', []);
        this.cartUpdated();
    },

    cartUpdated:function () {
        $('#cartCountSpan').text(this.cartItems.length);
    }
});