App = Ember.Application.create();

App.ApplicationController = Ember.Controller.extend({
    // the initial value of the `shopping cart` property
    sample : 'Global Value'
});

App.ApplicationAdapter = DS.FixtureAdapter;
