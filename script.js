// var $random = $('#random');
// var $reset = $('#reset');
// var $content = $('#content');

$(document).ready(function() {
    $("#random").click(function() {
        $("body").css("backgroundColor", getRandomColor() );
    });
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
