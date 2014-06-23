App.InventorysearchRoute = Ember.Route.extend({
    model:function (params) {
        console.log('Came to the inventory route' + params.name);
        var inventory = this.store.find('inventoryitem');
        return inventory;
    },

//    the initial value of the `search` property
//    setupController:function (controller, inventoryitem) {
//        console.log('In the setup ' + inventoryitem);
//        controller.set('model', inventoryitem);
//    },

    setupController:function (controller, items) {
        controller.set('model', items);

        controller.set('categoryItems',[
            {name:'Wines', count: 20},
            {name:'Soda', count: 20},
            {name:'Beer', count: 10}
        ]);
    },

    // Example to specify multiple outlets
    // Specify the {{outlet samplesection}} to render the template sample in inventorysearch template with outlet of samplesection
    renderTemplate: function() {
        // default behavior, renders the home template
        this.render();

        this.render('category', {    // render the `nav` template
            into: 'inventorysearch',         // into the `home` template (rendered above)
            outlet: 'categorysection',  // using the outlet named `navigation`
            controller : 'category'
        });
    }
});