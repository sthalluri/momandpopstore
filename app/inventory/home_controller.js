App.HomeController = Ember.ArrayController.extend({
    // the initial value of the `search` property
    search:'',
    actions:{
        query:function () {
            // the current value of the text field
            var query = this.get('search');
            console.log(query);

            // Transition to a route based on a parameter
            // Second parameter is the model object
            this.transitionToRoute('/inventorysearch/' + query);
        }
    }
});
