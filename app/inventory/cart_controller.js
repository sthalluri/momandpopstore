App.CartController = Ember.ArrayController.extend({
    // the initial value of the `search` property
    cartItems:[],
    actions:{
        addToCart:function (item) {
            this.cartItems.push({
                id:item.get('id'),
                name:item.get('name'),
                imageURL:item.get('imageURL')
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
        for(var i=0; i< this.cartItems.length; i++){
            if(this.cartItems[i].id === item.id){
                this.cartItems[i].quantity +=1;
                return;
            }
        }

        this.cartItems.push({
            id:item.id,
            name:item.name,
            quantity:1,
            price:item.price,
            imageURL:item.imageURL
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