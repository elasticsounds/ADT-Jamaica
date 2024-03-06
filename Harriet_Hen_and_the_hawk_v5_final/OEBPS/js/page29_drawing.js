var canvas, ctx, flag = false,
prevX = 0,
currX = 0,
prevY = 0,
currY = 0,
dot_flag = false;
var count=0;

var x = "black",
//var x = "#FFFFFF",
y = 5;

function init() {
    setTimeout(function () 
    {
       
	    var mouseIsDown=0;
    canvas = document.getElementById('can');
    ctx = canvas.getContext("2d");
    w = canvas.width;
    h = canvas.height;

    canvas.addEventListener("mousedown", mouseDown, false);
    canvas.addEventListener("mousemove", mouseXY, false);
    canvas.addEventListener("mouseup", mouseUp, false);
    canvas.addEventListener("touchstart", touchDown, false);
    canvas.addEventListener("touchmove", touchXY, true);
    canvas.addEventListener("touchend", touchUp, false);
	}, 100);
}

function mouseUp(e) {
    e.stopPropagation();
    mouseIsDown = 0;
    mousefindxy('up', e);
}

function mouseDown(e) {
    e.stopPropagation();
    mouseIsDown = 1;

    mousefindxy('down', e);
    //document.getElementById('cake1').style.display="block";
}

function mouseXY(e) {
    e.stopPropagation();
    if (!e)
        var e = event;
    canX = e.pageX - canvas.offsetLeft;
    canY = e.pageY - canvas.offsetTop;
    mousefindxy('move', e);
}

function touchUp(e) {
    e.stopPropagation();
    if (!e)
        var e = window.event || e; 
    mouseIsDown = 0;
    findxy('up', e);
}

function touchDown(e)
{
    e.stopPropagation();
    if (!e)
        var e = window.event;
    e.preventDefault();
    mouseIsDown = 1;
    findxy('down', e);
    count++;
    if (count>5)
    {
        document.getElementById('can').style.display="none";
   //document.getElementById('cake1').style.display="block";
    }
}
function touchXY(e) {
    e.stopPropagation();
    if (!e)
        var e = window.event || e; 
    e.preventDefault();
    findxy('move', e);
}



function showPos() {
    ctx.font = "24pt Helvetica";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "rgb(64,255,64)";
    var str = canX + ", " + canY;
    if (mouseIsDown)
        str += " down";
    if (!mouseIsDown)
        str += " up";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
            // draw text at center, max length to fit on canvas
    ctx.fillText(str, canvas.width / 2, canvas.height / 2, canvas.width - 10);
            // plot cursor
    ctx.fillStyle = "white";
    ctx.fillRect(canX -5, canY -5, 10, 10);
}




function color(obj) {
    switch (obj.id) {
        case "lightviolet":
            x="#690468";
            break;
        case "darkblue":
            x="#0000FF";
            break;
        case "darkpink":
            x="#FF33FE";
            break;
        case "lightblue":
            x = "#3FDBC5";
            break;
        case "lightgreen":
            x = "#008000";
            break;
        case "lightred":
            x = "#FF0000";
            break;
        case "lightyellow":
            x = "#FFFF00";
            break;
        case "lightorange":
            x = "#FFA500";
            break;
        case "lightblack":
            x = "#070707";
            break;
        case "lightpink":
            x = "#FFC0CB";
            break;
        case "lightbrown":
            x = "#964B00";
            break;
        case "lightpurple":
            x = "#800080";
            break;
        case "pink":
            x = "white";
            break;
        
		case "green":
			x="#00FF00";
			break;
		case "blue":
			x="#00FFFF";
			break;
		case "red":
			x="red";
			break;
		case "yellow":
			x="yellow";
			break;
		case "brown":
			x="#FF1493";
			break;
		case "black":
			x="black";
			break;
		case "black1":
			x="black";
			break;

		case "white":
            x = "white";
            break;

    }
 //alert(x);
 /*if (x == "white") 
 y = 14;
 else y = 2;
 */
}
function penthick(thick)
{
//    y=thick;
y=2
}

function draw() {
	//alert(x);
    if (x=="white")
    {
        ctx.clearRect(prevX,prevY,25,25);
    }
    else
    {
     //   ctx.clearRect(prevX,prevY,25,25);

    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
    }
}

function erase() {
    var m = confirm("Want to clear");
    if (m) {
        ctx.clearRect(0, 0, w, h);
        document.getElementById("canvasimg").style.display = "none";
    }
}

function save() {
    document.getElementById("canvasimg").style.border = "2px solid";
    var dataURL = canvas.toDataURL();
    document.getElementById("canvasimg").src = dataURL;
    document.getElementById("canvasimg").style.display = "inline";
}

function mousefindxy(res, e) {
    e.stopPropagation();
    if (res == 'down') {
        prevX = currX;
        prevY = currY;
        currX = e.pageX - canvas.offsetLeft;
        currY = e.pageY - canvas.offsetTop;
        flag = true;
        dot_flag = true;
        if (dot_flag) {
            ctx.beginPath();
            ctx.fillStyle = x;
            ctx.fillRect(currX, currY, 2, 2);
            ctx.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") {
        flag = false;
    }
    if (res == 'move') {

        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.pageX - canvas.offsetLeft;
            currY = e.pageY - canvas.offsetTop;
            draw();
        }
    }
}


function findxy(res, e) {
    e.stopPropagation();
    if (res == 'down') {
        prevX = currX;
        prevY = currY;
        currX = e.targetTouches[0].pageX - canvas.offsetLeft;
        currY = e.targetTouches[0].pageY - canvas.offsetTop;
        flag = true;
        dot_flag = true;
        if (dot_flag) {
            ctx.beginPath();
            ctx.fillStyle = x;
            ctx.fillRect(currX, currY, 2, 2);
            ctx.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") {
        flag = false;
    }
    if (res == 'move') {

        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.targetTouches[0].pageX - canvas.offsetLeft;
            currY = e.targetTouches[0].pageY - canvas.offsetTop;
            draw();
        }
    }
}
function clearpage()
{
    var canvas = document.getElementById('can');
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

}

function mycolor(color)
{
    x="#E75480";
}

function showColor()
{
    document.getElementById("colorbox").style.display="block";
}
