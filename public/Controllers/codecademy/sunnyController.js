app.controller('sunnyController', [ function(){
  var self = this;
    self.today = new Date();
        self.appetizers = [
                {
                  name: 'Sausage, egg & cheese casserole muffins',
                  img:'https://s-media-cache-ak0.pinimg.com/564x/84/a2/a3/84a2a388a7b826772af3f8cdb19378af.jpg',
                  description: 'These sausage, egg and cheese muffins are a fun savory breakfast.',
                  price: 4.95
                },
                {
                  name: 'Vegetable Fritters',
                  img:'https://s-media-cache-ak0.pinimg.com/236x/3f/e3/87/3fe387826779f4fd61ae875633d9d92c.jpg',
                  description: 'Crispy Vegetable Fritters with avocado yogurt dipping sauce.',
                  price: 3.95
                },
                {
                  name: 'Breakfast taco bites',
                  img:'https://s-media-cache-ak0.pinimg.com/564x/87/e4/11/87e4113a13f67342be177d6bbafdc1e0.jpg',
                  description: 'Perfect sized scoops with egg, cheese and your choice of bacon or sausage',
                  price: 4.95
                }
        ];
  
        self.mains=[
              {
              	name: 'Big Steak Omelette',
                img:'https://s-media-cache-ak0.pinimg.com/564x/c5/80/cd/c580cd83a1ff5f740b08bed9738f6d87.jpg',
                description:'A western steak omelette too big for your stomach.',
                price:7.99
              },
              {
              	name: 'Ham \'n\' Cheese Omelet Roll',
                img:'https://hostedmedia.reimanpub.com/TOH/Images/Photos/37/300x300/exps14575_TKF62721D168_x.jpg',
                description:'Artisan Thin Crust, Creamy Garlic Sauce, Angus Steak, Roasted Garlic, Mushrooms, Green Onions, Parmesan.',
                price:10.99
              },
              {
              	name: 'White Choclate Macadamia Nut Pancakes',
                img: 'https://s-media-cache-ak0.pinimg.com/236x/2e/76/9b/2e769b16b00348974578e58e27b54bbc.jpg',
                description:'The diet starts tomorrow. Until then enjoy some Godiva white choclate macadamia nut pancakes.',
                price:9.99
              }
        ];
        
        self.extras=[
              {
              	name:'Hashbrowns',
                img:'http://cf.lifeloveandsugar.com/wp-content/uploads/2012/08/cheesy_hashbrown_casserole2.jpg',
                price:1.79
              },
              {
              	name:'Biscuits & Gravy',
                img:'https://daisyt13.files.wordpress.com/2012/01/biscuits-and-gravy-e1327273264297.jpg',
                price:3.79
              },
              {
              	name:'French Toast Sticks',
                img:'https://abeautifulmess.typepad.com/.a/6a00d8358081ff69e2017c36f98b24970b-800wi',
                price:2.99
              }
        ];
  }
]);