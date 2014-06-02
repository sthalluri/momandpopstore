App.HomeRoute = Ember.Route.extend({

    model:function () {

        console.log('Came to the inventory route');

        var inventory = [];

        var store = this.store;

        var rec = this.store.push('Category', {
            id:1,
            name:'Red Wines',
            category:'Red Wines',
            description :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet semper elementum. Nulla vitae sapien ultrices, commodo turpis ac, pellentesque erat. Maecenas consequat dignissim neque et dapibus. Donec ac urna vitae lectus auctor porta quis eu nibh. Etiam sit amet pharetra leo. Nullam iaculis, lacus eu fermentum feugiat, lacus mauris consequat nibh, sed varius massa velit quis libero. '
        });

        inventory.push(rec);

        rec = this.store.push('Category', {
            id:2,
            name:'Purple Wines',
            category:'Wine',
            description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        });

        inventory.push(rec);

        rec = this.store.push('Category', {
            id:3,
            name:'Green Wines',
            category:'Wine',
            description : 'Ut a ultrices turpis. Morbi risus libero, sodales non elit ut, hendrerit consectetur ante. Curabitur molestie feugiat tincidunt. Quisque viverra, leo sed euismod vehicula, est lectus tempus sapien, eu sodales mauris ipsum id elit. Mauris eu arcu et ante laoreet euismod. Nulla bibendum, sapien vel aliquam imperdiet, nulla ligula feugiat ipsum, quis tristique tellus ante ac magna. Pellentesque vehicula, ligula vel aliquam rhoncus, velit lacus interdum odio, eu dapibus tellus diam vel augue. Ut quis lacus'
        });

        inventory.push(rec);

        return inventory;
    }
});