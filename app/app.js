App = Ember.Application.create();

App.ApplicationController = Ember.Controller.extend({
    // the initial value of the `shopping cart` property
    sample : 'Global Value'
});

App.ApplicationAdapter = DS.FixtureAdapter;


App.FixtureAdapter = DS.FixtureAdapter.extend({
    queryFixtures: function(records, query, type) {
        return records.filter(function(record) {
            for(var key in query) {
                if (!query.hasOwnProperty(key)) { continue; }
                var value = query[key];
                if (record[key] !== value) { return false; }
            }
            return true;
        });
    }
});