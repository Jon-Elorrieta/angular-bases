import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cont',
  template: `
  <h1>Hola Contador</h1>

  <h1>Contador : {{ cont }}</h1>

<button (click)="increaseBy(+1)">+1</button>
<button (click)="reset(-10)">RESET</button>
<button (click)="increaseBy(-1)">-1</button>
  `
})

export class ContComponent  {
  public cont = 50;

  increaseBy(params:number):void {
    this.cont += params;
  }

  reset(params:number):void {
    this.cont += params;
  }

  //ngOnInit() { }
}
