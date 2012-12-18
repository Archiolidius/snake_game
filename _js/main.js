$(document).ready(function () {
    var canvas = $('#canvas_snake')[0];
    var ctx = canvas.getContext('2d');
    var h = $('#canvas_snake').height();
    var w = $('#canvas_snake').width();
    //Рисуем canvas

    //canvas
    //ctx.fillText("Fill text", 20, 50);
    var game_status = 1;//menu
    switch (game_status) {
        case 0:
        {
            menu();
            break;
        }
        case 1:
        {
            game();
            break;
        }
    }
    })
