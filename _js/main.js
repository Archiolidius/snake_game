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
        var cell_size = 10;

        function init() {
            direction = 'rigth';
            snake();
            //target();
            draw_snake();
            //control()
            if (typeof game_loop != "undefined") clearInterval(game_loop);
            game_loop = setInterval(draw_snake(), 60);
        }

        init();

        function snake() {
            length = 6;
            var start_y = 100; // начальное положение у
            snake_array = [];
            for (var i = 1; i <= length; i++) {
                snake_array.push({x:i * cell_size, y:start_y});
            }
        }

        function draw_snake() {
            //Рисуем canvas
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, w, h);
            ctx.strokeStyle = "black";
            ctx.strokeRect(0, 0, w, h);
            var x_x = snake_array[0].x;
            var y_y = snake_array[0].y;
            for (var i = 0; i < length; i++) {
                ctx.fillRect(snake_array[i].x, snake_array[i].y, cell_size, cell_size);
                ctx.strokeStyle = "black";
                ctx.strokeRect(snake_array[i].x, snake_array[i].y, cell_size, cell_size);
            }
            if (direction == 'rigth') {
                x_x = x_x + 10;
            }
            if (direction == 'left') {
                x_x = x_x - 10;
            }
            if (direction == 'up') {
                y_y = y_y - 10;
            }
            if (direction == 'down') {
                y_y = y_y + 10;
            }
            var tail = snake_array.pop(); //pops out the last cell
            tail.x = x_x;
            tail.y = y_y;
            snake_array.unshift(tail);
            for (var i = 0; i < length; i++) {
                ctx.fillRect(snake_array[i].x * cell_size, snake_array[i].y * cell_size, cell_size, cell_size);
                ctx.strokeStyle = "black";
                ctx.strokeRect(snake_array[i].x * cell_size, snake_array[i].y * cell_size, cell_size, cell_size);
            }
        }

        $(document).bind('keypress', function (e) {
            if (e.keyCode == 119) {
                direction = 'up';
                draw_snake();
            }
            if (e.keyCode == 100) {
                direction = 'rigth';
                draw_snake();
            }
            if (e.keyCode == 115) {
                direction = 'down';
                draw_snake();
            }
            if (e.keyCode == 97) {
                direction = 'left';
                draw_snake();
            }
        })
    }
)
