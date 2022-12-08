import '../scss/style.scss'
import mouseMove from './modules/mousemove'

class Intera10 extends mouseMove {

  canvas: HTMLCanvasElement;
  // ctx: CanvasRenderingContext2D;

  constructor() {
    super();

    this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
    // this.ctx = this.canvas.getContext("2d");

    this.bind();
  }
  update() {
    console.log(this.mouse.x);
    window.requestAnimationFrame(this.update.bind(this));
  }
  bind() {
    // window.requestAnimationFrame(this.update.bind(this));
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new Intera10();
});