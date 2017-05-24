import { Pelicula } from './../model/pelicula.model';
import { PELICULAS } from './mock.peliculas';

import { Injectable } from '@angular/core';

@Injectable()
export class PeliculasService {

constructor() { }

getPeliculas(){
    return PELICULAS;
}

insertPeliculas(pelicula: Pelicula) {
    Promise.resolve(PELICULAS).then((peliculas: Pelicula[]) => peliculas.push(pelicula));
}

}