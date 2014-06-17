App.InventoryitemRoute = Ember.Route.extend({
    model:function (params) {
        console.log('Inventory item id :' + params.id);
        return this.store.find('inventoryitem', params.id);
    }
});