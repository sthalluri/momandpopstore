Ember.Handlebars.helper('money', function (value, options) {
    return '$' + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
});
