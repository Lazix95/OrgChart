
/*
 * Global objects, marginTopOfEveryLevel
*/

// Get canvas, height and width setting
var canvas = document.getElementById('js-canvas');
var width = canvas.width = document.getElementById("js-orgChart").getBoundingClientRect().width;
var context = canvas.getContext('2d');
var colorOfLines = "#8b0000";
var imageObj = new Image();
imageObj.src = "img/logo.png";

// Scroll and resize event listeners
window.addEventListener('scroll', scrollOnCanvas, false);
window.addEventListener('resize', resizeCanvas, false);
window.addEventListener('fullscreenchange', resizeCanvas, false);

quantoxFlag = false;

// On scroll function
window.onscroll = function (e) {
    fillArrayData();
    drawStuff();
};

// Resize canvas width
function resizeCanvas() {
    width = canvas.width = canvas.width = document.getElementById("js-orgChart").getBoundingClientRect().width;
    canvas.height = window.innerHeight;
    if (objects != null) {
        setWidthOfOrgChart();
        setScrollbarPosition();
        fillArrayData();
    }
    drawStuff();
    setTimeout(function (){
         width = canvas.width = canvas.width = document.getElementById("js-orgChart").getBoundingClientRect().width;
        drawStuff();
    }, 100);
}

// Redraw canvas on scroll
function scrollOnCanvas() {
    if (objects != null) {
        setWidthOfOrgChart();
        fillArrayData();
        drawStuff();
    }
}

// Draw staff on canvas
function drawStuff() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (quantoxFlag) {
        context.globalAlpha = 0.7;
        var x = ((getWidth()) / 2 - (getWidth() ) / 2.5);
        var y = (canvas.height / 10);
        context.drawImage(imageObj, x, y, (getWidth() / 4.5), (getWidth() / 4.5) * 0.28);
        context.globalAlpha = 1;
        
         context.globalAlpha = 0.7;
        var x = (getWidth()/1.44);
        var y = (canvas.height / 10);
        context.drawImage(imageObj, x, y, (getWidth() / 4.5), (getWidth() / 4.5) * 0.28);
        context.globalAlpha = 1;
    }
    var i;
    if (objects) {
        for (i = 0; i < objects.length; i++) {

            context.strokeStyle = colorOfLines;
            context.beginPath();
            context.moveTo(objects[i].x + objects[i].width / 2, objects[i].y + objects[i].height + 5); // start 5px below every node;
            context.lineTo(objects[i].x + objects[i].width / 2, objects[i].y + objects[i].height + marginTopOfEveryLevel / 2);
            for (var j = 0; j < objects.length; j++) {
                if (objects[i].id == objects[j].parentID) {
                    context.lineTo(objects[j].x + objects[j].width / 2, objects[i].y + objects[i].height + marginTopOfEveryLevel / 2);
                    context.lineTo(objects[j].x + objects[j].width / 2, objects[j].y - 5);
                    context.moveTo(objects[j].x + objects[j].width / 2, objects[i].y + objects[i].height + marginTopOfEveryLevel / 2)
                    context.lineWidth = 5;
                    context.stroke();
                }
            }
        }
    }
}

// Get browser width
function getWidth() {
    return Math.max(
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth
            );
}