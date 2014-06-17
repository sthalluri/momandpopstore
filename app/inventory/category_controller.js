App.CategoryController = Ember.ArrayController.extend({
    // the initial value of the `search` property
    categories: [{
        name : 'Wines', count : 30
    },{
        name : 'Beer', count : 3
    },{
        name : 'Soda', count : 22
    }]
});
