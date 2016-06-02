$(document).ready(function() {
  $(".animal h1").click(function() {
    $(".animalmenu, #infobox").toggleClass('hidden');
    var animalChoice = $(this).text();
    alert(animalChoice);
  });
});
