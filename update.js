var angleSec, angleMin, angleHr;

var output = document.querySelector('#output');

var xSec, xMin, xHr;
var ySec, yMin, yHr;


var ctx = output.getContext('2d');

var length;

setInterval(function(){
  window.time = new Date();

  resetScreen(ctx);
  
  updateHours(time, ctx);
  updateMinutes(time, ctx);
  updateSeconds(time, ctx);

  drawCircle(ctx);
  putNumbers(ctx);
  
  writeTime(time, ctx);
  
}, 100);
