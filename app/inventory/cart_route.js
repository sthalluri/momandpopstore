App.CartRoute = Ember.Route.extend({
    model:function (params) {
        return this.store.find('cartitem');
    }
});