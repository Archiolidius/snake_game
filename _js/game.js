function game() {

    var canvas = $('#canvas_snake')[0];
    var ctx = canvas.getContext('2d');
    var cur_x; //текущие координаты
    var cur_y;
    var length; //текущая длина змейки
    var h = $('#canvas_snake').height();
    var w = $('#canvas_snake').width();
    var direction;
    var snake_array;
    var cell_size = 20;
    var speed = 80;
    var target_x;
    var target_y;
    var score = 0;
    var intervalID;
    var sound_target;
    var sound_fon;
    $('.score').click(function(){one()});

    function init() {

        direction = 'left';
        create_target();
        snake();
        sound()
        intervalID = setInterval(function () {
            draw_snake();
        }, speed);
    }

    init();

    function snake() {

        length = 3;
        var start_y = 0; // начальное положение у
        snake_array = [];
        for (var i = w / cell_size; i < length + (w / cell_size); i++) {
            snake_array.push({x:i * cell_size, y:start_y});
        }
    }

    function draw_snake() {

        //Рисуем canvas
        ctx.fillStyle = "#C3D9FF";
        ctx.fillRect(0, 0, w, h);
        ctx.strokeStyle = "black";
        ctx.strokeRect(0, 0, w, h);
        //canvas
        cur_x = snake_array[0].x;
        cur_y = snake_array[0].y;

        for (var i = 0; i < length; i++) {

            ctx.fillStyle = "#993300";
            ctx.fillRect(snake_array[i].x, snake_array[i].y, cell_size, cell_size);
            ctx.strokeStyle = "#330000";
            ctx.strokeRect(snake_array[i].x, snake_array[i].y, cell_size, cell_size);


        }

        if (direction == 'rigth') {
            cur_x += cell_size;
        }
        if (direction == 'left') {
            cur_x -= cell_size;
        }
        if (direction == 'up') {
            cur_y -= cell_size;
        }
        if (direction == 'down') {
            cur_y += cell_size;
        }
        for (var i = 1; i < length; i++) {
            if (snake_array[i].x == cur_x && snake_array[i].y == cur_y) {
                //speed = speed + 100000;
                clearInterval(intervalID);
                init();
                score = 0;
                $('.score').html('Очки:' + score);
                sound_fon.pause();
            }
        }
        var tail = snake_array.pop(); //pops out the last cell
        tail.x = cur_x;
        tail.y = cur_y;
        //проверяем столкновение с точкой

        if (cur_x / cell_size == target_x && cur_y / cell_size == target_y) {
            snake_array.push({x:cur_x, y:cur_y});
            length++;
            create_target();
            score++;
            sound_target = new Audio('media/3.ogg');

            sound_target.play();

            $('.score').html('Очки:' + score);
        }
        //проверяем столкновение
        snake_array.unshift(tail);
        draw_target(target_x, target_y);
        exceptions()
    }

    function create_target() {
        var max = h / cell_size;
        var rand = Math.round(Math.random() * (max - 1));
        target_x = rand;
        target_y = rand;

    }

    function draw_target(x, y) {
        ctx.fillStyle = "#00FF00";
        ctx.fillRect(x * cell_size, y * cell_size, cell_size, cell_size);
        ctx.strokeStyle = "black";
        ctx.strokeRect(x * cell_size, y * cell_size, cell_size, cell_size);
    }

    function exceptions() {
        if (cur_x < 0 || cur_y < 0 || cur_x > w - cell_size || cur_y > h - cell_size) {
            //speed = speed + 100000;
            clearInterval(intervalID);
            init();
            score = 0;
            $('.score').html('Очки:' + score);
            sound_fon.pause();
        }

    }

    function sound() {
        sound_fon = new Audio('media/3.mp3');
        sound_fon.volume = 0.2;
        sound_fon.play();
    }

    /*$(document).bind('keypress', function (e) {
     switch (e.keyCode) {
     case 119:
     {
     if (direction != 'down')
     direction = 'up';
     break;
     }
     case 100:
     {
     if (direction != 'left')
     direction = 'rigth';
     break;
     }
     case 115:
     {
     if (direction != 'up')
     direction = 'down';
     break;
     }
     case 97:
     {
     if (direction != 'rigth')
     direction = 'left';
     break;
     }
     }*/

    var delay = (function () {
        var timer = 0;
        return function (callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })();


    $(document).keydown(function (e) {
        delay(function () {

            switch (e.keyCode) {
                case 87:
                {
                    if (direction != 'down')
                        direction = 'up';

                    break;
                }
                case 68:
                {
                    if (direction != 'left')
                        direction = 'rigth';

                    break;
                }
                case 83:
                {
                    if (direction != 'up')
                        direction = 'down';

                    break;
                }
                case 65:
                {
                    if (direction != 'rigth')
                        direction = 'left';

                    break;

                }
            }
        }, 50);
    })
    /*if (e.keyCode == 119) {
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
     }*/

    //})
}