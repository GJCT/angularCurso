import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }
  //get personajes(): Personaje[]{
  //return this.dbzService.personajes;
  //}
  
  //agregarNuevoPersonaje(argumento: Personaje){
    //debugger; pausa la ejecucion de app para visualizar errores o cambios
    //this.personajes.push(argumento);
  //}

  constructor (){
  }
}
