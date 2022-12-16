import '../scss/style.scss'
import p5 from "p5";

const sketch = (p: p5) => {

  // マウス位置
  let mouse = {
    x:0,
    y:0
  }

  let imgPath: string = "/window2.png";
  let canvas;
  let img: any;
  let isClicked: boolean = false;

  p.preload = () => {
    img = p.loadImage(imgPath);
  }

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    canvas = <HTMLCanvasElement>document.querySelector(".p5Canvas");
    bindMousemove(canvas);

    p.image(img, 0, 0, p.windowWidth, p.windowHeight)
  };

  p.draw = () => {
    if(isClicked === false) return;

    //@ts-ignore
    p.blendMode(p.REMOVE);
    p.fill(0);
    p.ellipse(mouse.x, mouse.y, 100, 100);
  };

  const mouseMove = (e: MouseEvent) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }

  const mouseDown = () => {
    isClicked = true;
  }

  const mouseUp = () => {
    isClicked = false;
  }

  const bindMousemove = (target: HTMLCanvasElement) => {
    target.addEventListener('mousemove', mouseMove);
  }

  window.addEventListener("mousedown", mouseDown);
  window.addEventListener("mouseup", mouseUp);
};

new p5(sketch);