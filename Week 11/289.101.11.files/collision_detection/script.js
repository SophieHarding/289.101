/*eslint-env browser*/
/*eslint no-console:0*/
/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red while the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)

*/

var puck = document.getElementById('puck');
var puck_x = 210;
var puck_y = 210;
var speed = 50;

function logcoordinates() {
   console.log('x=' + puck_x + ' y=' + puck_y);
}


function checkCollision() {
    //detect collision
    if(puck_x >= 250 && puck_x <= 350){
        
        if(puck_y >= 150 && puck_y <=250){
            console.log('collision!!')
        }
        
    }
    console.log('check');
}

puck.style.top = puck_y + 'px';
puck.style.left = puck_x + 'px';


document.getElementById('puck').style.top = puck_y + 'px';
document.getElementById('puck').style.left = puck_x + 'px';

document.getElementById('left').addEventListener('click', () => {
puck_x -= speed;
puck.style.left = puck_x + 'px';
    logcoordinates();
    checkCollision();
});
document.getElementById('right').addEventListener('click', () => {
puck_x += speed;
puck.style.left = puck_x + 'px';
    logcoordinates();
    checkCollision();
});

document.getElementById('up').addEventListener('click', () => {
puck_x -= speed;
document.getElementById('puck').style.top = puck_x + 'px';
    logcoordinates();
    checkCollision();
});

document.getElementById('down').addEventListener('click', () => {
puck_x += speed;
document.getElementById('puck').style.top = puck_x + 'px';
    logcoordinates();
    checkCollision();
});
