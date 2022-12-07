import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajeComponent } from './personaje/personaje.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzSevice } from './services/dbz.service';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajeComponent,
    AgregarComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    DbzSevice
  ]
})
export class DbzModule { }
