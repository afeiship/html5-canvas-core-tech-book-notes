var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

context.font = '38pt Arial';
context.fillStyle = 'green';
context.strokeStyle = 'red';

context.fillText(
    'Hello',
    canvas.width / 2 - 150,
    canvas.height / 2 + 15,
);


context.strokeText(
    'Hello',
    canvas.width / 2 - 150,
    canvas.height / 2 + 15,
)