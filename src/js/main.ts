import '../scss/style.scss'
import p5 from "p5";

const sketch = (p: p5) => {

  // マウス位置
  let mouse = {
    x:0,
    y:0
  }

  let canvas;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    canvas = <HTMLCanvasElement>document.querySelector(".p5Canvas");
    bindMousemove(canvas);
  };

  p.draw = () => {
    p.fill(0);
    p.ellipse(mouse.x, mouse.y, 100, 100);
  };

  const mouseMove = (e: MouseEvent) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }

  const bindMousemove = (target: HTMLCanvasElement) => {
    target.addEventListener('mousemove', mouseMove);
  }
};

new p5(sketch);