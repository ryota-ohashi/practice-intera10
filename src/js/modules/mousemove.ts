export default class Mousemove {

  canvas: HTMLCanvasElement;
  mouse: {x:number, y:number};
  bindMouseMove: any;

  constructor() {
    // マウス位置
    this.mouse = {
      x:0,
      y:0
    }

    this.canvas = <HTMLCanvasElement>document.getElementById("canvas");

    // イベント
    this.bindMouseMove = this.mouseMove.bind(this, this.canvas);
  }
  mouseMove(e: any) {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  }
  bindMousemove(target: HTMLCanvasElement){
    target.addEventListener('mousemove', this.bindMouseMove);
  }
}