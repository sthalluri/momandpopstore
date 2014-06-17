App.Category = DS.Model.extend({
    name:DS.attr('string'),
    description:DS.attr('string'),
    count:DS.attr('number')
});

App.Category.FIXTURES = [
    {
        id:1,
        count:360,
        name:'Wines',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet semper elementum. Nulla vitae sapien ultrices, commodo turpis ac, pellentesque erat. Maecenas consequat dignissim neque et dapibus. Donec ac urna vitae lectus auctor porta quis eu nibh. Etiam sit amet pharetra leo. Nullam iaculis, lacus eu fermentum feugiat, lacus mauris consequat nibh, sed varius massa velit quis libero. '
    },
    {
        id:2,
        count:32,
        name:'Beer',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet semper elementum. Nulla vitae sapien ultrices, commodo turpis ac, pellentesque erat. Maecenas consequat dignissim neque et dapibus. Donec ac urna vitae lectus auctor porta quis eu nibh. Etiam sit amet pharetra leo. Nullam iaculis, lacus eu fermentum feugiat, lacus mauris consequat nibh, sed varius massa velit quis libero. '
    },
    {
        id:3,
        count:22,
        name:'Soda',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet semper elementum. Nulla vitae sapien ultrices, commodo turpis ac, pellentesque erat. Maecenas consequat dignissim neque et dapibus. Donec ac urna vitae lectus auctor porta quis eu nibh. Etiam sit amet pharetra leo. Nullam iaculis, lacus eu fermentum feugiat, lacus mauris consequat nibh, sed varius massa velit quis libero. '
    }
];