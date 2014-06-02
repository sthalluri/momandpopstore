App.Inventoryitem = DS.Model.extend({
    name:DS.attr('string'),
    category:DS.attr('string'),
    description:DS.attr('string'),
    price:DS.attr('number')
});
