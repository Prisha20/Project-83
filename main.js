var mouse_event = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('canvas10');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    var width = screen.width;
    new_width = screen.width - 70;
    new_height = screen.height - 300;

    if(width < 992)
    {
        document.getElementById("canvas10").width = new_width;
        document.getElementById("canvas10").height = new_height;
        document.body.style.overflow = "hidden";
    }

canvas.addEventListener("mouseDown", mouseclick);
    function mouseclick(e)
{
    mouse_event = "mouseDown";
}

canvas.addEventListener("mouseleave", mouseout);

function mouseout(e)
{
    mouse_event = "mouseleave";
}

canvas.addEventListener("mouseup", mouselift);

function mouselift(e)
{
    mouse_event = "mouseUP";
}

canvas.addEventListener("mousemove", mousewalk);

function mousewalk(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetleft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if ("mouse_event = mouseDown") 
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + current_position_of_mouse_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x = ") + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}


    canvas.addEventListener("mousedown", mousedown10);
    

    canvas.addEventListener("touchstart", start_touch);
    
    function start_touch(e)
    {
        console.log("start_touch");

        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
   

    }

    
    

    canvas.addEventListener("touchmove", move_touch);
    function move_touch(e)
    {
        
        console.log("move_touch")
         current_position_of_touch_x = e.touches[0] - canvas.offsetLeft;
         current_position_of_touch_y = e.touches - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
   
       
    }

