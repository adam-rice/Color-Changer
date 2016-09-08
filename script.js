$(document).ready(function() {
  randomButton();
  resetButton();
})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function resetButton() {
  $("#reset").click( function() {
    $("body").css("backgroundColor", "#FFFFFF")
  })
}

function randomButton() {
  $("#random").click(function() {
    var backgroundColor = $("body").css("backgroundColor", getRandomColor() )
    if (backgroundColor === "#FFFFFF") {
      getRandomColor()
    }
  })
}
