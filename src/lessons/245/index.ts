import p5 from "p5";
new p5((p) => {
  // размеры холста
  const width = 500;
  const height = 500;
  let x = width / 2;
  let y = height / 2;
  let dy = 1;
  let dline = 400;
  let ex = width;
  let ey = 0;
  let ew = 30;
  let eh = 200;

  p.setup = () => {
    p.createCanvas(width, height);
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(40);
  };

  p.draw = () => {
    p.background(0);


    p.text("🐰", x, y);
    y += dy;
    dy += 1;

    if (y > dline) {
      dy = 0;
    }

    if (p.mouseIsPressed) {
      dy = -9;
    }

    p.noStroke();
    p.fill(2, 255, 0, 128);
    p.rect(0, dline, width, height - dline);

    p.fill(100);
    p.rect(ex, 0, ew, eh);
    ex -= 1;

    if (ex < 0) {
      ex = width;
      eh = p.random(dline / 4, dline / 2);

      if (p.random(100) > 50) {
        ey = 0;
      } else {
        ey = dline - eh;
      }
    }
    if ((x > ex) && (x < ex + ew) && (y > ey) && (y < ey + eh)) {
      p.noLoop();
    }
  };

});