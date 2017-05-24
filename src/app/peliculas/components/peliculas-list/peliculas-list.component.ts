import { Component, OnInit } from '@angular/core';
import { Pelicula } from './../../model/pelicula.model';
import { PeliculasService } from './../../services/peliculas.service';

@Component({
  selector: 'app-peliculas-list',
  templateUrl: './peliculas-list.component.html',
  styleUrls: ['./peliculas-list.component.css'],
  providers: [PeliculasService]
})
export class PeliculasListComponent implements OnInit {

    public peliculas:any;
	  public mostrarDatos: boolean;
  	public pelicula: Pelicula;
    public peliculaElegida: Pelicula;

    public datoServicio: string;
  constructor(private peliculasService: PeliculasService) {
    
    this.mostrarDatos = false;
    this.peliculas= peliculasService.getPeliculas();
    this.pelicula = this.peliculas[0];
    this.peliculaElegida = this.peliculas[0]; 
    
   }

   onShowHide (value: boolean) {
		this.mostrarDatos = value;
	}

	 onCambiarTitulo (pelicula: Pelicula) {
        this.pelicula = pelicula;
        this.peliculaElegida = pelicula;

    }

  ngOnInit() {
  }

}