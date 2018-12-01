var canvas = document.getElementById('canvas');
var readout = document.getElementById('readout');
var context = canvas.getContext('2d');
var spritesheet = new Image();

function windowToCanvas(inX, inY) {
    var box = canvas.getBoundingClientRect();
    var xRatio = canvas.width / box.width;
    var yRatio = canvas.height / box.height;
    return {
        x: inX - box.left * xRatio,
        y: inY - box.top * yRatio
    }
}

function drawBackground() {
    var VERTICLE_LINE_SPACING = 12;
    var i = context.canvas.height;

    context.clearReact(0, 0, canvas.width, canvas.height);
    context.strokeStyle = 'lightgray';
    context.lineWidth = 0.5;

    while (i > VERTICLE_LINE_SPACING * 4) {
        context.beginPath();
        context.moveTo(0, i);
        context.lineTo(context.canvas.width, i);
        context.stroke();
        i -= VERTICLE_LINE_SPACING;
    }
}

function drawSpritesheet() {
    context.drawImage(spritesheet, 0, 0);
}


function drawGuidelines(inX, inY) {
    context.strokeStyle = 'rgba(0, 0, 230, 0.8)';
    context.lineStyle = 0.5;
    drawVerticalLine(inX);
    drawHorizontalLine(inY);
}


function updateReadout(inX, inY) {
    readout.innerText = [inX.toFixed(0), inY.toFixed(0)].join('');
}

function drawHorizontalLine(inY) {
    context.beginPath();
    context.moveTo(0, inY + 0.5);
    context.lineTo(context.canvas.width, inY + 0.5);
    context.stroke();
}

function drawVerticalLine(inX) {
    context.beginPath();
    context.moveTo(0, inX + 0.5);
    context.lineTo(context.canvas.height, inX + 0.5);
    context.stroke();
}

canvas.onmousemove = function (inEvent) {
    var loc = windowToCanvas(inEvent.clientX, inEvent.clientY);
};