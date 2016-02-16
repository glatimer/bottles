$(document).ready(function() {
  var flavors = ["Chocolate, ", "Strawberry, ", "Vanilla, ", "Pistachio, ", "Black Currant."];
  flavors.forEach(function(flavor) {
    $("ul#flavors").append(flavor);
  })
});
