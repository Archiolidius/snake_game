$(document).ready(function () {
    var canvas = $('#canvas_snake')[0];
    var ctx = canvas.getContext('2d');
    var cur_x; //текущие координаты
    var cur_y;
    var length; //текущая длина змейки
    var h = $('#canvas_snake').height();
    var w = $('#canvas_snake').width();
    var direction;
    var snake_array;
    var cell_size=10;


    function init() {
        snake();
        //target();
        draw();
    }
    init();

    function snake() {
        length = 5;
        var start_y = 10; // начальное положение у
        snake_array=[],[];
        for (i = 0; i <= length; i++) {
            snake_array.push({x:i*cell_size, y:start_y*cell_size});
        }
    }

    function draw(){
        for(i=0;i<=length;i++){
            ctx.fillRect(snake_array[i].x,snake_array[i].y,cell_size,cell_size);
            ctx.strokeStyle = "white";
            ctx.strokeRect(snake_array[i].x,snake_array[i].y,cell_size,cell_size);
        }
    }

    function control(){

    }


})
