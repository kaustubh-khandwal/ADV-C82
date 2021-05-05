var canvas;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var circle_color = "";
var circle_width = "" ;
var circle_radius = "";
var mouseEvent = "";
var currentpositionof_X = "";
var currentpositionof_Y = "";



canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e) {
    
    circle_color = document.getElementById("input_color").value;
    circle_width = document.getElementById("input_width").value;
    circle_radius = document.getElementById("input_radius").value;
    mouseEvent = "mouseDown";
    if (circle_color == "" || circle_width == "" || circle_radius == "") {
        window.alert("You have to select the color, width and radius to draw")
    }
    
    
}


canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e) {
    currentpositionof_X = e.clientX - canvas.offsetLeft;
    currentpositionof_Y = e.clientY - canvas.offsetTop;


    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = circle_color;
        ctx.lineWidth = circle_width;
        ctx.arc(currentpositionof_X,currentpositionof_Y,circle_radius,0,2*Math.PI);
        ctx.stroke();
        console.log(mouseEvent)
    }
}


canvas.addEventListener("mouseup",my_mouseup)

function my_mouseup(e) {
    mouseEvent = "mouseUp"
}

function clear_area() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}