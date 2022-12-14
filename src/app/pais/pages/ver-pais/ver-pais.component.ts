import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";
import { PaisService } from '../../services/pais.service';
import { Country} from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit{

  pais!: Country;

  constructor (
    private activatedRouter: ActivatedRoute, 
    private paisService: PaisService
  ){}
  ngOnInit(): void {
    
    this.activatedRouter.params
    .pipe(
      switchMap(({id}) => this.paisService
      .getPaisId(id)), tap(console.log)
    )
    .subscribe((id)=>this.pais = id);
    

    // this.activatedRouter.params
    // .subscribe(({id}) =>{
    //   console.log(id);
    //   this.paisService.getPaisId(id)
    //   .subscribe(pais=>{
    //     console.log(pais);
    //   })
    // })
  }
}
