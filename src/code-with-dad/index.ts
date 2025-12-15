import p5 from "p5";

new p5((p) => {
  // размеры холста
  const canvasWidth = 375;
  const canvasHeight = 500;

  // заяц
  const x = canvasWidth / 2;
  let y = canvasHeight / 2;
  let dy = 1; // скорость по Y (гравитация)

  // линия травы
  const dline = 400;

  // куст
  let ex = canvasWidth; // x-координата куста
  const ew = 30; // ширина
  const eh = 200; // высота

  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight);
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(40);
  };

  p.draw = () => {
    p.background(0);

    // 🐰 заяц
    p.text("🐰", x, y);
    y += dy;
    dy += 1; // гравитация

    // если заяц коснулся травы — остановка падения
    if (y > dline) {
      dy = 0;
    }

    // прыжок по нажатию мыши
    if (p.mouseIsPressed) {
      dy = -9;
    }

    // 🌱 трава
    p.noStroke();
    p.fill(2, 255, 0, 128);
    p.rect(0, dline, p.width, p.height - dline);

    // 🌳 куст
    p.fill(100);
    p.rect(ex, 0, ew, eh);
    ex -= 1;

    // если куст ушёл за экран — вернуть
    if (ex + ew < 0) {
      ex = p.width;
    }
  };
});
