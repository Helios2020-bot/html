

window.onload = function() {

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth=3;
    ctx.moveTo(0,100);
    ctx.lineTo(1500,100);
    
    //  ctx.Stroke();
     ctx.closePath();

    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var img3 = document.getElementById("img3");
    
   ctx.drawImage(img1, 10, 250,400,350);
   ctx.drawImage(img2, 500, 250,400,350);
   ctx.drawImage(img3, 1100, 250,400,400);
   ctx.stroke();
   
   ctx.font = "30px Arial";
ctx.fillText("Oxem Technologies", 10, 50);
ctx.beginPath();
ctx.moveTo(100,50);
   ctx.arc(100,50,20,0,Math.PI,True);
   ctx.closePath();
   ctx.stroke();
//    var ctx = c.getContext("2d"), bars = 20, i = 0, radius = 140;
// ctx.lineWidth = 3;

// for(i = 0; i < bars; i++, radius -= ctx.lineWidth - 1) {      // increase bar, reduce radius
//   ctx.beginPath();
//   ctx.arc(c.width * 0.5, c.height, radius, 0, Math.PI, true); // half circle
//   ctx.strokeStyle = "hsl(" + (i / bars * 300) + ",90%,50%)";  // set color using HSL
//   ctx.stroke();
// }
  
};