import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string ='ironman';
  public edad:number = 54;

  get capitalizedOptions():string{
    return this.name.toUpperCase();
  }

  public getHeroDescription():string{
     return `${this.name} - ${this.edad}`
  }

  changeHero(nombre:string):void{
      this.name= nombre;
      //throw 'Metodo no implementado'
  }

  changeEdad(age:number):void{
    this.edad= age;
    //throw 'Metodo no implementado'
  }

  resetForm():void{
    this.name= 'ironman';
    this.edad= 54;

    //document.querySelectorAll('h1')!.forEach( element => {  element.innerHTML = '<h1>Desde Angular</h1>';
  //});
    //throw 'Metodo no implementado'

  }



}
