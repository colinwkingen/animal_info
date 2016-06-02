///ANIMAL FARM
var SNAKES = {
  imgpath: "img/snake.jpg",
  name: "The Snake",
  blurb: "Our slithery friends",
  fact: "Indiana Jones is afraid of snakes.",
  info: "This is a paragraph about snakes. We'll add more later, okay?"
};
var TURTLES = {
  imgpath: "img/turtle.jpg",
  name: "Turtle",
  blurb: "I like turtles",
  fact: "Jake the Zombie likes turtles too.",
  info: "This is a paragraph about turtles. We'll add more later, okay?"
};
var OCTOPI = {
  imgpath: "img/octopus.jpg",
  name: "Octopus",
  blurb: "Not to be confused with squid",
  fact: "Indiana Jones is afraid of octopi as well.",
  info: "This is a paragraph about octopi. We'll add more later, okay?"
};
///end ANIMAL FARM


$(document).ready(function() {
  $(".animal h1").click(function() {
    $(".animalmenu, #infobox").toggleClass('hidden');
    var animalChoice = $(this).text();
  });
});
