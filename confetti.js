// Simple Confetti for Canvas
const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];

for (let i = 0; i < 150; i++) {
  pieces.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    size: Math.random() * 10 + 2,
    speed: Math.random() * 3 + 2,
    color: `hsl(${Math.random() * 360}, 100%, 70%)`,
    tilt: Math.random() * 10 - 5,
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of pieces) {
    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.ellipse(p.x, p.y, p.size, p.size / 2, p.tilt, 0, 2 * Math.PI);
    ctx.fill();
  }
}

function updateConfetti() {
  for (let p of pieces) {
    p.y += p.speed;
    p.tilt += 0.05;
    if (p.y > canvas.height) {
      p.y = -10;
      p.x = Math.random() * canvas.width;
    }
  }
}

function startConfetti() {
  setInterval(() => {
    updateConfetti();
    drawConfetti();
  }, 20);
}
