import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
    heroes: string[] = ['Spiderman', 'IronMan', 'Deadpool', 'Thor'];
    heroeBorrado: string='';

    borrarHero(){
      //console.log('borrando...');
      this.heroeBorrado = this.heroes.shift() || '';
      //console.log(heroeBorrado);
    }

}
