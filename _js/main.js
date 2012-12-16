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
        var speed = 100;
        var target_x;
        var target_y;

        function init() {
            direction = 'rigth';
            create_target();
            snake();
            setInterval(function () {
                draw_snake();
            }, speed);


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
            cur_x = snake_array[0].x;
            cur_y = snake_array[0].y;
            for (var i = 0; i < length; i++) {
                ctx.fillRect(snake_array[i].x, snake_array[i].y, cell_size, cell_size);
                ctx.strokeStyle = "black";
                ctx.strokeRect(snake_array[i].x, snake_array[i].y, cell_size, cell_size);
            }
            if (direction == 'rigth') {
                cur_x += 10;
            }
            if (direction == 'left') {
                cur_x -= 10;
            }
            if (direction == 'up') {
                cur_y -= 10;
            }
            if (direction == 'down') {
                cur_y += 10;
            }
            var tail = snake_array.pop(); //pops out the last cell
            tail.x = cur_x;
            tail.y = cur_y;
            snake_array.unshift(tail);
            for (var i = 0; i < length; i++) {

                ctx.fillRect(snake_array[i].x * cell_size, snake_array[i].y * cell_size, cell_size, cell_size);
                ctx.strokeStyle = "black";
                ctx.strokeRect(snake_array[i].x * cell_size, snake_array[i].y * cell_size, cell_size, cell_size);
            }
            draw_target(target_x, target_y);
            exceptions()
        }

        function create_target() {
            var max = h / 10;
            var min = 0;
            var rand = Math.round(Math.random() * 10);
            target_x = rand;
            target_y = rand;
            draw_target(target_x, target_y);
        }

        function draw_target(x, y) {
            ctx.fillRect(x * cell_size, y * cell_size, cell_size, cell_size);
            ctx.strokeStyle = "black";
            ctx.strokeRect(x * cell_size, y * cell_size, cell_size, cell_size);
        }

        function exceptions() {
            if (cur_x < 0 || cur_y < 0 || cur_x > w || cur_y > h) {
                speed = speed + 100000;
                init();
            }
        }

        $(document).bind('keypress', function (e) {
            if (e.keyCode == 119) {
                if (direction != 'down')
                    direction = 'up';
            }
            if (e.keyCode == 100) {
                if (direction != 'left')
                    direction = 'rigth';
            }
            if (e.keyCode == 115) {
                if (direction != 'up')
                    direction = 'down';
            }
            if (e.keyCode == 97) {
                if (direction != 'rigth')
                    direction = 'left';
            }
        })
    }
)
