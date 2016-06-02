///ANIMAL FARM
var SNAKES = {
  img: ["img/snake.jpg", "Picture of a snake"],
  name: "The Snake",
  blurb: "Our slithery friends",
  fact: "Indiana Jones is afraid of snakes.",
  info: "This is a paragraph about snakes. We'll add more later, okay?"
};
var TURTLES = {
  img: ["img/turtle.jpg", "Picture of a turtle"],
  name: "Turtle",
  blurb: "I like turtles",
  fact: "Jake the Zombie likes turtles too.",
  info: "This is a paragraph about turtles. We'll add more later, okay?"
};
var OCTOPI = {
  img: ["img/octopus.jpg", "Picture of an octopus"],
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
      if (animalChoice === "SNAKES") {
        $("img").attr("src", SNAKES.img[0]);
        $("img").attr("alt", SNAKES.img[1]);
      } else if (animalChoice === "TURTLES") {
        $("img").attr("src", TURTLES.img[0]);
        $("img").attr("alt", TURTLES.img[1]);
      } else {
        $("img").attr("src", OCTOPI.img[0]);
        $("img").attr("alt", OCTOPI.img[1]);
      }

  });
});
