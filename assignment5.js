'use strict'
function smiley(){
    
    var c=document.getElementById("mycanvas");
    var ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth=8;
    //ctx.moveTo(490,870);
    ctx.fillStyle="yellow"; 
    ctx.arc(700, 300, 200, 0, Math.PI * 2, true);
    ctx.stroke();
    // ctx.fillStyle="yellow";
     ctx.fill();
     ctx.beginPath();
    
    ctx.moveTo(600,250);
    ctx.fillStyle="black";
    ctx.arc(600,250,50,0,Math.PI*2,true);
    ctx.moveTo(800,250);
    ctx.arc(800,250,50,0,Math.PI*2,true);
    ctx.moveTo(550,350);
    ctx.fill();
    ctx.quadraticCurveTo(700,500,850,350);
    ctx.stroke();
}
