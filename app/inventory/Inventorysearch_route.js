App.InventorysearchRoute = Ember.Route.extend({
    model:function (params) {
        console.log('Came to the inventory route' + params.name);
        var inventory = this.store.find('inventoryitem');
        return inventory;
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