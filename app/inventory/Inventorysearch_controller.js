App.InventorysearchController = Ember.ArrayController.extend({

    needs:['cart'],

    cartController:Ember.computed.alias('controllers.cart'),

    actions:{
        addToCart:function (item) {
            var cartController = this.get('cartController');
            cartController.addItemToCart({
                id:item.get('id'),
                name:item.get('name'),
                quantity:item.get('id'),
                price:item.get('price'),
                imageURL:item.get('imageURL')
            });
        },

        viewDetails:function (id) {
            this.transitionToRoute('inventoryitem', id);
            this.get('cartItems').push(id);
            console.log(this.get('cartItems'));
        }
    }
});