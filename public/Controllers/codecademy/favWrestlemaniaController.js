//CONTROLLER
app.controller('favWrestlemaniaController', [ function() { 
  var self = this;
  
  self.title = 'Find every Wrestlemania you\'re looking for!'; 
  self.promo = 'If you loved it give it a \'+1\', if you\'ve seen better don\'t be afraid to drop a \'-1\'';
  self.products=[ 
  { 
    name: 'Wrestlemania I', 
    order: 1, 
    pubdate: new Date('1985', '02', '31'), 
    cover: 'http://vignette1.wikia.nocookie.net/prowrestling/images/d/d6/Wrestlemania_1_v.jpg/revision/latest?cb=20091003175440',
    link:'http://watchwrestling.to/video/watch-wwf-wrestlemania-1-1985/',
    voted:false,
    likes:0,
    dislikes:0
  }, 
  { 
    name: 'Wrestlemania II', 
    order: 2, 
    pubdate: new Date('1986', '03', '07'), 
    cover: 'http://serialkillercalendar.com/VHSWASTELAND/HIGH-RES-VHS-COVERS/WWF-WRESTLEMANIA-2.jpg',
    link:'http://watchwrestling.to/video/watch-wwf-wrestlemania-2-1986/',
    voted:false,
    likes:0,
    dislikes:0
  },
    { 
    name: 'Wrestlemania III', 
    order: 3, 
    pubdate: new Date('1987', '02', '29'), 
    cover: 'http://vignette3.wikia.nocookie.net/prowrestling/images/f/f7/Wrestlemania_3_v.jpg/revision/latest?cb=20091003181141',
    link:'http://watchwrestling.to/video/watch-wwf-wrestlemania-3-1987/',
    voted:false,
    likes:0,
    dislikes:0
  },
    { 
    name: 'Wrestlemania IV', 
    order: 4, 
    pubdate: new Date('1988', '02', '27'), 
    cover: 'http://vignette2.wikia.nocookie.net/prowrestling/images/1/1d/Wrestlemania_4_v.jpg/revision/latest?cb=20091003181521',
    link:'http://watchwrestling.to/video/watch-wwf-wrestlemania-4-1988/',
    voted:false,
    likes:0,
    dislikes:0
  },
    { 
    name: 'Wrestlemania V', 
    order: 5, 
    pubdate: new Date('1989', '03', '02'), 
    cover: 'http://vignette1.wikia.nocookie.net/prowrestling/images/8/83/Wrestlemania_5_v.jpg/revision/latest?cb=20091003181522',
    link: 'http://watchwrestling.to/video/watch-wwf-wrestlemania-5-1989/',
    voted:false,
    likes:0,
    dislikes:0
  },
{ 
    name: 'Wrestlemania VI', 
    order: 6, 
    pubdate: new Date('1990', '03', '01'), 
    cover: 'http://vignette3.wikia.nocookie.net/prowrestling/images/d/d9/Wrestlemania_6_v.jpg/revision/latest?cb=20091003205754',
    link: 'http://watchwrestling.to/video/watch-wwf-wrestlemania-6-1990/',
    voted:false,
    likes:0,
    dislikes:0
  },
    { 
    name: 'Wrestlemania VII', 
    order: 7, 
    pubdate: new Date('1991', '02', '24'), 
    cover: 'http://vignette3.wikia.nocookie.net/prowrestling/images/2/24/Wrestlemania_7_v.jpg/revision/latest?cb=20091003205755',
    link: 'http://watchwrestling.to/video/watch-wwf-wrestlemania-7-1991/',
    voted:false,
    likes:0,
    dislikes:0
  },
    { 
    name: 'Wrestlemania VIII', 
    order: 8, 
    pubdate: new Date('1992', '03', '05'), 
    cover: 'https://ringthedamnbell.files.wordpress.com/2012/03/wrestlemania_8_v.jpg',
    link: 'http://watchwrestling.to/video/watch-wwf-wrestlemania-8-1992/',
    voted:false,
    likes:0,
    dislikes:0
  },
    { 
    name: 'Wrestlemania IX', 
    order: 9, 
    pubdate: new Date('1993', '03', '04'), 
    cover: 'http://vignette2.wikia.nocookie.net/prowrestling/images/8/80/WWF_Wrestlemania_IX_-_Cover.jpg/revision/latest?cb=20091126015701',
    link: 'http://watchwrestling.to/video/watch-wwf-wrestlemania-9-1993/',
    voted:false,
    likes:0,
    dislikes:0
  },
    { 
    name: 'Wrestlemania X', 
    order: 10, 
    pubdate: new Date('1994', '02', '20'), 
    cover: 'http://vignette2.wikia.nocookie.net/prowrestling/images/7/77/WWF_Wrestlemania_X_-_Cover.jpg/revision/latest?cb=20091126015702',
    link: 'http://watchwrestling.to/video/watch-wwf-wrestlemania-10-1994/',
    voted:false,
    likes:0,
    dislikes:0
  },
    { 
    name: 'Wrestlemania XI', 
    order:11, 
    pubdate: new Date('1995', '03', '02'), 
    cover: 'http://vignette4.wikia.nocookie.net/prowrestling/images/8/8c/WWF_Wrestlemania_XI_-_Cover.jpg/revision/latest?cb=20091126015702',
    link: 'http://watchwrestling.to/video/watch-wwf-wrestlemania-11-1995/',
    voted:false,
    likes:0,
    dislikes:0
  },
    { 
    name: 'Wrestlemania XII', 
    order: 12, 
    pubdate: new Date('1996', '02', '31'), 
    cover: 'http://vignette1.wikia.nocookie.net/prowrestling/images/c/c5/WWF_Wrestlemania_XII_-_Cover.jpg/revision/latest?cb=20091126015702',
    link: 'http://watchwrestling.to/video/watch-wwf-wrestlemania-12-1996/',
    voted:false,
    likes:0,
    dislikes:0
  },
    { 
    name: 'Wrestlemania XIII', 
    order: 13, 
    pubdate: new Date('1997', '02', '23'), 
    cover: 'http://images6.fanpop.com/image/photos/39000000/Wrestlemania-13-UK-VHS-Cover-wrestlemania-xiii-13-39089052-973-737.jpg',
    link: 'http://watchwrestling.to/video/watch-wwf-wrestlemania-13-1997/',
    voted:false,
    likes:0,
    dislikes:0
  },
    { 
    name: 'Wrestlemania XIV', 
    order: 14, 
    pubdate: new Date('1998', '02', '29'), 
    cover: 'http://vignette2.wikia.nocookie.net/prowrestling/images/0/0b/WWF_Wrestlemania_XIV_-_Cover.jpg/revision/latest?cb=20091126015703',
    link: 'http://watchwrestling.to/video/watch-wwf-wrestlemania-14-1998/',
    voted:false,
    likes:0,
    dislikes:0
  },
    { 
    name: 'Wrestlemania XV', 
    order: 15, 
    pubdate: new Date('1999', '02', '28'), 
    cover: 'https://i.ytimg.com/vi/Sw19xA5TrWE/maxresdefault.jpg',
    link: 'http://watchwrestling.to/video/watch-wwf-wrestlemania-15-1999/',
    voted:false,
    likes:0,
    dislikes:0
  },
    { 
    name: 'Wrestlemania XVI', 
    order: 16, 
    pubdate: new Date('2000', '03', '02'), 
    cover: 'https://i.ytimg.com/vi/gnHQGZV3c7E/maxresdefault.jpg',
    link: 'http://watchwrestling.to/video/watch-wwf-wrestlemania-16-2000/',
    voted:false,
    likes:0,
    dislikes:0
  },
    { 
    name: 'Wrestlemania XVII', 
    order: 17, 
    pubdate: new Date('2001', '03', '01'), 
    cover: 'http://i1.ytimg.com/vi/WCCOJgNBr6w/maxresdefault.jpg',
    link: 'http://watchwrestling.to/video/watch-wwe-wrestlemania-17-2001/',
    voted:false,
    likes:0,
    dislikes:0
  },
    { 
    name: 'Wrestlemania XVIII', 
    order: 18, 
    pubdate: new Date('2002', '02', '17'), 
    cover: 'https://i.ytimg.com/vi/3AFokbrUtzE/maxresdefault.jpg',
    link: 'http://watchwrestling.to/video/watch-wwf-wrestlemania-18-2002/',
    voted:false,
    likes:0,
    dislikes:0
  },
    { 
    name: 'Wrestlemania XIX', 
    order: 19, 
    pubdate: new Date('2003', '02', '30'), 
    cover: 'http://vignette3.wikia.nocookie.net/prowrestling/images/d/da/WWF_Wrestlemania_XIX-_Cover.jpg/revision/latest?cb=20101127202642',
    link: 'http://watchwrestling.to/video/watch-wwe-wrestlemania-19-2003/',
    voted:false,
    likes:0,
    dislikes:0
  },
    { 
    name: 'Wrestlemania XX', 
    order: 20, 
    pubdate: new Date('2004', '02', '14'), 
    cover: 'http://vignette1.wikia.nocookie.net/ewrestling/images/7/76/Wrestlemaniaxxdvd1dz.jpg/revision/latest?cb=20090301225614',
    link: 'http://watchwrestling.to/video/watch-wwe-wrestlemania-20-2004/',
    voted:false,
    likes:0,
    dislikes:0
  },
    { 
    name: 'Wrestlemania XXI', 
    order: 21, 
    pubdate: new Date('2005', '03', '05'), 
    cover: 'http://vignette3.wikia.nocookie.net/prowrestling/images/c/c6/WWF_Wrestlemania_XXI_-_Cover.jpg/revision/latest?cb=20101127202219',
    link: 'http://watchwrestling.to/video/watch-wwe-wrestlemania-21-2005/',
    voted:false,
    likes:0,
    dislikes:0
  },
    { 
    name: 'Wrestlemania XXII', 
    order: 22, 
    pubdate: new Date('2006', '03', '02'), 
    cover: 'https://i.ytimg.com/vi/G_Zd15kKpCI/maxresdefault.jpg',
    link: 'http://watchwrestling.to/video/watch-wwe-wrestlemania-22-2006/',
    voted:false,
    likes:0,
    dislikes:0
  },
    { 
    name: 'Wrestlemania XXIII', 
    order: 23, 
    pubdate: new Date('2007', '03', '01'), 
    cover: 'http://dvdca.com/download/171420-1/5831wrestlemania23_001.jpg',
    link: 'http://watchwrestling.to/video/watch-wwe-wrestlemania-23-2007/',
    voted:false,
    likes:0,
    dislikes:0
  },
    { 
    name: 'Wrestlemania XXIV', 
    order: 24, 
    pubdate: new Date('2008', '02', '30'), 
    cover: 'http://www.dvd-covers.org/d/120755-3/Wrestlemania24.jpg',
    link: 'http://watchwrestling.to/video/watch-wwe-wrestlemania-24-2008/',
    voted:false,
    likes:0,
    dislikes:0
  },
    { 
    name: 'Wrestlemania XXV', 
    order: 25, 
    pubdate: new Date('2009', '03', '05'), 
    cover: 'http://orig15.deviantart.net/646c/f/2012/361/c/8/wwe_wrestlemania_xxv_cover_by_aladdindesign-d2w5h5k.png',
    link: 'http://watchwrestling.to/video/watch-wwe-wrestlemania-25-2009/',
    voted:false,
    likes:0,
    dislikes:0
  },
    { 
    name: 'Wrestlemania XXVI', 
    order: 26, 
    pubdate: new Date('2010', '02', '28'), 
    cover: 'http://dc300.4shared.com/img/U5ytlVLO/s7/1314355ed10/wwe_wrestlemania_26_dvd_cover_',
    link: 'http://watchwrestling.to/video/watch-wwe-wrestlemania-26-2010/',
    voted:false,
    likes:0,
    dislikes:0
  },
    { 
    name: 'Wrestlemania XXVII', 
    order: 27, 
    pubdate: new Date('2011', '03', '03'), 
    cover: 'http://orig02.deviantart.net/3e94/f/2011/182/9/2/wrestlemania_27_cover_v1_by_eduard2009-d3ko97q.jpg',
    link: 'http://watchwrestling.to/video/watch-wwe-wrestlemania-27-2011/',
    voted:false,
    likes:0,
    dislikes:0
  },
    { 
    name: 'Wrestlemania XXVIII', 
    order: 28, 
    pubdate: new Date('2012', '03', '01'), 
    cover: 'http://vignette4.wikia.nocookie.net/prowrestling/images/8/8d/WWE_Wrestlemania_XXVIII_-_Cover.jpg/revision/latest?cb=20140325143547',
    link: 'http://watchwrestling.to/video/watch-wwe-wrestlemania-28-2012/',
    voted:false,
    likes:0,
    dislikes:0
  },
    { 
    name: 'Wrestlemania XXIX', 
    order: 29, 
    pubdate: new Date('2013', '03', '07'), 
    cover: 'http://img03.deviantart.net/7423/i/2013/099/4/8/wwe_wrestlemania_29_dvd_cover_v4_by_chirantha-d612the.jpg',
    link: 'http://watchwrestling.to/video/watch-wwe-wrestlemania-29-2013/',
    voted:false,
    likes:0,
    dislikes:0
  },
    { 
    name: 'Wrestlemania XXX', 
    order: 30, 
    pubdate: new Date('2014', '03', '06'), 
    cover: 'http://pre04.deviantart.net/d0ac/th/pre/f/2014/098/0/f/wrestlemania_xxx__version_i__by_mylittlez-d7dmhjb.jpg',
    link: 'http://watchwrestling.to/video/watch-wwe-wrestlemania-xxx/',
    voted:false,
    likes:0,
    dislikes:0
  },
    { 
    name: 'Wrestlemania XXXI', 
    order: 31, 
    pubdate: new Date('2015', '02', '29'), 
    cover: 'http://img14.deviantart.net/1d4b/i/2015/085/7/e/wwe_wrestlemania_31_dvd_cover_2015_v2_by_dinesh_musiclover-d8n6uhd.jpg',
    link: 'http://watchwrestling.to/video/watch-wwe-wrestlemania-31-2015-replay/',
    voted:false,
    likes:0,
    dislikes:0
  },
]

  self.plusOne=function(index) { 
    if(!self.products[index].voted)
      {
        self.products[index].likes +=1;
        self.products[index].voted = true;
      }
    if(self.products[index].voted && self.products[index].likes === 0)
      {
        self.products[index].likes +=1;
        self.products[index].dislikes--;
      }
  };
  
  self.minusOne=function(index) { 
   if(!self.products[index].voted)
      {
        self.products[index].dislikes +=1;
        self.products[index].voted = true;
      }
    if(self.products[index].voted && self.products[index].dislikes === 0)
      {
        self.products[index].dislikes +=1;
        self.products[index].likes--;
      }
  };
}]);


