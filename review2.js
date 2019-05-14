var movies = ['Cinderella',
 'Django',
 'The Mask',
  'Men In Black',
'Space Jam',
'Flubber' ];

  for(var O = 0; O < movies.length; O+=1) {
      console.log(O);
      var P = movies[O];
      console.log(P);
  }

  var movies2 = movies.filter(item=> {
      return item.length > 7;
  })
  console.log(movies2);

  var movies3 = movies.map(item=>{
    return  item + ':Spoof';
  });

  console.log(movies3);

  movies.forEach(item =>{
      console.log(item);
      console.log('mustsee');
  }); 

  if (movies=>6)  {
      console.log("Eureka!");
  };