/**
 * Created with JetBrains PhpStorm.
 * User: Archi_000
 * Date: 18.12.12
 * Time: 14:42
 * To change this template use File | Settings | File Templates.
 */
function menu(){
    var canvas = $('#canvas_snake')[0];
    var ctx = canvas.getContext('2d');
    var h = $('#canvas_snake').height();
    var w = $('#canvas_snake').width();

    ctx.font = 'bold 30px sans-serif';
    ctx.textBaseline = "middle";

    ctx.strokeText("Stroke text", 20, 100);
    $(ctx.strokeText).click(function(){
        alert('dfdsf');
    })



}
