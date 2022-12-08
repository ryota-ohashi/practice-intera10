export default class Mousemove {

  mouse: {x:number, y:number};
  bindMouseMove: any;
  // scrollY: number;

  constructor() {
    // マウス位置
    this.mouse = {
      x:0,
      y:0
    }

    // スクロール量
    // this.scrollY = window.pageYOffset;

    this.bindMouseMove = this.mouseMove.bind(this);
    this.bindMousemove();
  }
  mouseMove(e: MouseEvent) {
    this.mouse.x = e.pageX;
    this.mouse.y = e.pageY;
    // this.scrollY = window.pageYOffset;
  }
  bindMousemove(){
    window.addEventListener('mousemove', this.bindMouseMove);
  }
}