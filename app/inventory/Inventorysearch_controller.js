App.InventorysearchController = Ember.ArrayController.extend({

    needs:['cart'],

    cartController:Ember.computed.alias('controllers.cart'),

    // the initial value of the `search` property
    setupController:function (controller, inventoryitem) {
        console.log('In the setup ' + inventoryitem);
        controller.set('model', inventoryitem);
    },

    actions:{

        addToCart:function (item) {
            var cartController = this.get('cartController');
            cartController.addItemToCart({
                id:item.get('id'),
                name:item.get('name'),
                quantity:item.get('id'),
                price:item.get('price')
            });
        },

        viewDetails:function (id) {
            this.transitionToRoute('inventoryitem', id);
            this.get('cartItems').push(id);
            console.log(this.get('cartItems'));
        }
    },

    setupController:function (controller) {
        console.log('In the setup of Inventory Search');
        // Set the IndexController's `title`
        controller.set('title', "My App");
    }
});