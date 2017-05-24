
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PeliculasRoutes } from './peliculas.routing';
import { PeliculasListComponent } from './components/peliculas-list/peliculas-list.component';
import { PeliculasCreateComponent } from './components/peliculas-create/peliculas-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PeliculasRoutes
  ],
  declarations: [
    PeliculasListComponent,
    PeliculasCreateComponent
  ]
})
export class PeliculasModule { }
