App.InventoryitemRoute = Ember.Route.extend({

    model:function (params) {

        console.log('Inventory item id :' + params.id);

        var rec = this.store.push('Inventoryitem', {
            id:100,
            name:'Merlot',
            category:'Red Wine',
            description:'This is the best red wine ever'
        });

        return rec;
    }
});