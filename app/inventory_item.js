App.Inventoryitem = DS.Model.extend({
    name:DS.attr('string'),
    category:DS.attr('string'),
    description:DS.attr('string'),
    price:DS.attr('number'),
    imageURL:DS.attr('string')
});


App.Inventoryitem.FIXTURES = [
    {
        id:1,
        category:'Red Wine',
        name:'ANDRE STRAWBERRY',
        price: 22,
        imageURL : 'http://b208032a1d3287a6d3f3-258d94be31bdb406871c37e2eb1690c4.r56.cf1.rackcdn.com/catalog/product/cache/1/image/265x/9df78eab33525d08d6e5fb8d27136e95/a/n/andre_strawberry_nv_750.png',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet semper elementum. Nulla vitae sapien ultrices, commodo turpis ac, pellentesque erat. Maecenas consequat dignissim neque et dapibus. Donec ac urna vitae lectus auctor porta quis eu nibh. Etiam sit amet pharetra leo. Nullam iaculis, lacus eu fermentum feugiat, lacus mauris consequat nibh, sed varius massa velit quis libero. '
    },{
        id:2,
        category:'Red Wine',
        name:'YELLOW TAIL PNOT GRICIO',
        price: 10,
        imageURL : 'http://www.totalwine.com/_static/webupload/730/3_97516750_3.jpg',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet semper elementum. Nulla vitae sapien ultrices, commodo turpis ac, pellentesque erat. Maecenas consequat dignissim neque et dapibus. Donec ac urna vitae lectus auctor porta quis eu nibh. Etiam sit amet pharetra leo. Nullam iaculis, lacus eu fermentum feugiat, lacus mauris consequat nibh, sed varius massa velit quis libero. '
    },{
        id:3,
        category:'Red Wine',
        name:'SUTTERHOME PINOT GRICIO',
        price: 11,
        imageURL : 'http://i.walmartimages.com/i/p/00/08/52/00/00/0008520000075_500X500.jpg',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet semper elementum. Nulla vitae sapien ultrices, commodo turpis ac, pellentesque erat. Maecenas consequat dignissim neque et dapibus. Donec ac urna vitae lectus auctor porta quis eu nibh. Etiam sit amet pharetra leo. Nullam iaculis, lacus eu fermentum feugiat, lacus mauris consequat nibh, sed varius massa velit quis libero. '
    },{
        id:4,
        category:'Beer',
        name:'COORSLIGHT',
        price: 6,
        imageURL : 'http://bestof.longislandpress.com/2011/wp-content/uploads/2010/12/coors_light.jpg',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet semper elementum. Nulla vitae sapien ultrices, commodo turpis ac, pellentesque erat. Maecenas consequat dignissim neque et dapibus. Donec ac urna vitae lectus auctor porta quis eu nibh. Etiam sit amet pharetra leo. Nullam iaculis, lacus eu fermentum feugiat, lacus mauris consequat nibh, sed varius massa velit quis libero. '
    },{
        id:5,
        category:'Energy Drink',
        name:'Gatorade Orange',
        price: 4,
        imageURL : 'http://p2.zopnow.com/images/products/320/gatorade-gatorade-sports-drink-orange-flavour-500-ml.png',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet semper elementum. Nulla vitae sapien ultrices, commodo turpis ac, pellentesque erat. Maecenas consequat dignissim neque et dapibus. Donec ac urna vitae lectus auctor porta quis eu nibh. Etiam sit amet pharetra leo. Nullam iaculis, lacus eu fermentum feugiat, lacus mauris consequat nibh, sed varius massa velit quis libero. '
    },{
        id:6,
        category:'Soda',
        name:'Sprite',
        price: 22,
        imageURL : 'http://www.dairyqueen.com/PageFiles/4955/dq-drinks-soft-sprite.png?width=&height=810',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet semper elementum. Nulla vitae sapien ultrices, commodo turpis ac, pellentesque erat. Maecenas consequat dignissim neque et dapibus. Donec ac urna vitae lectus auctor porta quis eu nibh. Etiam sit amet pharetra leo. Nullam iaculis, lacus eu fermentum feugiat, lacus mauris consequat nibh, sed varius massa velit quis libero. '
    },{
        id:7,
        category:'Soda',
        name:'PEPSI',
        price: 2,
        imageURL : 'https://secure.footprint.net/cupages/pepsi/pepsi-canscfa8sm.png',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet semper elementum. Nulla vitae sapien ultrices, commodo turpis ac, pellentesque erat. Maecenas consequat dignissim neque et dapibus. Donec ac urna vitae lectus auctor porta quis eu nibh. Etiam sit amet pharetra leo. Nullam iaculis, lacus eu fermentum feugiat, lacus mauris consequat nibh, sed varius massa velit quis libero. '
    },{
        id:8,
        category:'SODA',
        name:'DIET COKE',
        price: 2.50,
        imageURL : 'http://www.dairyqueen.com/PageFiles/6085/dq-drinks-soft-coke.png?width=&height=810',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet semper elementum. Nulla vitae sapien ultrices, commodo turpis ac, pellentesque erat. Maecenas consequat dignissim neque et dapibus. Donec ac urna vitae lectus auctor porta quis eu nibh. Etiam sit amet pharetra leo. Nullam iaculis, lacus eu fermentum feugiat, lacus mauris consequat nibh, sed varius massa velit quis libero. '
    },{
        id:9,
        category:'SODA',
        name:'ARIZONA TEA',
        price: 1.50,
        imageURL : 'http://www.bestbeverage.co.nz/wp-content/uploads/2013/05/product-arizona.png',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet semper elementum. Nulla vitae sapien ultrices, commodo turpis ac, pellentesque erat. Maecenas consequat dignissim neque et dapibus. Donec ac urna vitae lectus auctor porta quis eu nibh. Etiam sit amet pharetra leo. Nullam iaculis, lacus eu fermentum feugiat, lacus mauris consequat nibh, sed varius massa velit quis libero. '
    }
];