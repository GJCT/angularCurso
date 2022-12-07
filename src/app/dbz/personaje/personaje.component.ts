import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzSevice } from '../services/dbz.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
})
export class PersonajeComponent {
  //@Input() personajes: Personaje [] =[]

  get personajes(){
    return this.dbzService.personajes;
  }

  constructor (private dbzService: DbzSevice){
    
  }
}
