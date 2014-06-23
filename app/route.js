// Configuring routing based on the path
App.Router.map(function () {
    this.resource('home', {path:'/'}, function () {
        this.resource('inventorysearch', {path:'/inventorysearch/:name'});
    });
    this.resource('inventorysearch', {path:'/inventorysearch/:name'});
    this.resource('inventoryitem', {path:'/inventoryitem/:id'});
    this.resource('featured');
    this.resource('cart');
    this.resource('orders');
    this.resource('checkout');
});