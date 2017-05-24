
import { Component, OnInit } from '@angular/core';
import { Pelicula } from './../../model/pelicula.model';
import { PeliculasService } from './../../services/peliculas.service';

@Component({
  selector: 'app-peliculas-create',
  templateUrl: './peliculas-create.component.html',
  styleUrls: ['./peliculas-create.component.css'],
  providers: [PeliculasService]
})
export class PeliculasCreateComponent implements OnInit {

  constructor(private _peliculasService: PeliculasService) { }

  ngOnInit() {
  }

  onCrearPelicula(titulo, director, anio) {
    let pelicula: Pelicula = new Pelicula(77, titulo, director, anio);
    this._peliculasService.insertPeliculas(pelicula);
  }
}