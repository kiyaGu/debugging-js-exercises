// Debugging
// fix the prototype functions - add keyword = function()
//make diameter in getRadius method refur to the global diameter
//fix type of radus in logCircumference method as radius
//fix type of MAth in logArea method as Math 
//change the variable Math.pi to Math.PI in both logCircumference and logArea methods
// (why didn't JS engine complain when we called Math.pi)
//change the data type of the argument passed to the Circle constructor from string to int
//change the getRadius in logArea to getRadius()


function Circle( diameter ){
  this.diameter = diameter;
}

Circle.prototype.getRadius = function(){
  return this.diameter / 2;
}

Circle.prototype.logCircumference = function(){
  const radius = this.getRadius();
  console.log('The circumference is ' + (Math.PI * 2 * radius));
}

Circle.prototype.logArea = function(){
  const radius = this.getRadius();
  console.log('The area of a circle is ' + Math.PI * Math.pow( '2', radius ));
}

const circle = new Circle(10);

circle.logCircumference();
circle.logArea();

// Code above has at least 7 bugs. Please find them using the debugger and fix them

// Callbacks
function delay( callback ){
    setTimeout( callback, 2000 );
}

function generateRandom(){
    const randomNumber = Math.round( Math.random() * 10);
}

function logRandom(randomNumber){
  console.log( 'my random number is: ' + randomNumber );
}

delay( generateRandom );
// Use callbacks to get logRandom to log the random number generated in generateRandom


// Pure functions
function square( arr ){
  for( var i = 0; i < arr.length; i++ ){
    arr[ i ] = arr[ i ] * arr[ i ];
  }

  return arr;
}

function addCitrusFruit( arr ){
  var citrus = [ 'lemon', 'orange', 'grapefruit' ];

  citrus.forEach( function( fruit){
    arr.push( fruit );
  })
  return arr;
}

function removeFirstAndLast( arr ){
  const mid = arr.splice( 1, arr.length - 2 );

  return mid;
}
// Rewrite above 3 functions as pure functions. They should perform the same
// operations without mutating the input arguments. Include code to demonstrate
// that the functions you have written perform same task as previous functions
// but without mutations
