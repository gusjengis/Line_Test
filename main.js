// Setup/Global Variables
graph = document.getElementById("graph");
draw = graph.getContext("2d");

var mouseX = 0;
var mouseY = 0;

// Draw Loop
setInterval(function(){
    clear();

    // Static Lines
    draw.fillStyle = "purple";
    line(100,100,200,150);

    draw.fillStyle = "red";
    line(200,150,300,300);

    draw.fillStyle = "blue";
    line(500,500,300,300);

    draw.fillStyle = "black";
    line(800,700,1000,700);
    line(800,700,900,900);
    line(900,900,1000,700);
    // Interactive Lines

    line(800,700,mouseX,mouseY);
    line(1000,700,mouseX,mouseY);
    line(900,900,mouseX,mouseY);
}
,1000/144);
    
// Drawing Functions
function line(x1,y1,x2,y2){
    let deltaX = x2-x1;
    let deltaY = y2-y1;
    let magnitude = (deltaX**2 + deltaY**2)**(1/2)
    let unitX = deltaX/magnitude;
    let unitY = deltaY/magnitude;
    var x = x1;
    var y = y1;
    for(i=0; i<magnitude; i++){
        draw.fillRect(x,y,1,1);
        x += unitX;
        y += unitY;
    }
}

function clear(){
    draw.fillStyle = "white";
    draw.fillRect(0,0,graph.width,graph.height);
}

// I/O
document.onmousemove = function(event){
    mouseX = event.clientX;
    mouseY = event.clientY;
};