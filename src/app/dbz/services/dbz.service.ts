import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
@Injectable({providedIn: 'root'})
export class DbzService {

  public characters:Character[] = [{
    id: uuid(),
    name:'Krillin',
    power:1000
  },{
    id: uuid(),
    name:'Goku',
    power:9500
  },{
    id: uuid(),
    name:'Veggeta',
    power:7500
  }];

  AddCharacter(character:Character):void{
    const newCharacter: Character={
      id:uuid(), ...character
    };
    this.characters.push(newCharacter);
  }

  //onDeleteCharacter(index:number){
  //this.characters.splice(index ,1);

  DeleteCharacterById(id:string){
    debugger;
    this.characters = this.characters.filter(character => character.id !== id);
  }


}
