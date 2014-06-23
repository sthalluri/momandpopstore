App.Cartitem = DS.Model.extend({
    name:DS.attr('string'),
    itemID:DS.attr('number'),
    description:DS.attr('string'),
    price:DS.attr('number'),
    imageURL:DS.attr('string'),
    quantity:DS.attr('quantity'),
    totalCost : function(){
        return this.get('price')*this.get('quantity');
    }.property('price', 'quantity')
});

App.Cartitem.FIXTURES = [];