function resetScreen(ctx) { 
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 300, 300);
}

function updateHours(time, ctx) {
  window.angleHr = ((((time.getHours()) <= 12) ? (time.getHours()) : ((time.getHours()) - 12)) * 30) + ((time.getMinutes() / 60) * 30);
  window.xHr = (45 * Math.sin(toRadians(angleHr))) + 150;
  window.yHr = (45 * Math.cos(toRadians(angleHr))) + 150;
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 5;
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(150, 150);
  ctx.lineTo(xHr, -yHr + 300);
  ctx.stroke();
}

function updateMinutes(time, ctx) {
  window.angleMin = (time.getMinutes() * 6) + ((time.getSeconds() / 60) * 6);
  window.xMin = (75 * Math.sin(toRadians(angleMin))) + 150;
  window.yMin = (75 * Math.cos(toRadians(angleMin))) + 150;
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 3;
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(150, 150);
  ctx.lineTo(xMin, -yMin + 300);
  ctx.stroke();
}

function updateSeconds(time, ctx) {
  window.angleSec = time.getSeconds() * 6;
  window.xSec = (100 * Math.sin(toRadians(angleSec))) + 150;
  window.ySec = (100 * Math.cos(toRadians(angleSec))) + 150;
  ctx.strokeStyle = '#ff0000';
  ctx.lineWidth = 1; 
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(150, 150);
  ctx.lineTo(xSec, -ySec + 300);
  ctx.stroke();
}

function writeTime(time, ctx) {
  ctx.fillStyle = '#000000';
  
  ctx.font = '13px monospace';
  ctx.fillText(
    time.getHours()
      .toString().padStart(2, '0')
    + ':'
    + time.getMinutes()
      .toString().padStart(2, '0')
    + ':'
    + time.getSeconds()
      .toString().padStart(2, '0'),
    220, 15
  );
  ctx.fill();
}

function darwCircle(ctx) {
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 2;
  for(var i = 0; i < 360; i++){
    ctx.beginPath();
    ctx.moveTo((Math.sin(toRadians(i)) * 149) + 150, (Math.cos(toRadians(i)) * 149) + 150);
    ctx.lineTo((Math.sin(toRadians(i + 1)) * 149) + 150, (Math.cos(toRadians(i + 1)) * 149) + 150);
    ctx.stroke();
  }
}

function putNumbers(ctx) {
  ctx.fillStyle = '#000000';
  for(var i = 0; i < 360; i += 30){
    ctx.fillText((i == 0) ? 12 : (i / 30).toString(), ((Math.sin(toRadians(i))) * 135) + 143.5, -(((Math.cos(toRadians(i))) * 135) + 150) + 303.25);
  }
}
