import { Movie } from "./Movie";
import fs from "fs";
export class Imdb {
    public movies: Movie[];
    constructor(arrayMovies: Movie[]) {
        this.movies = arrayMovies;

    }

    public escribirEnFicheroJSON(nombreFichero: string) {
        console.log("Escribe en fichero")
        fs.writeFileSync(nombreFichero, JSON.stringify(this.movies));
    }
    public obtenerInstaciaIMDB(nombreFichero: string , hasMovieField = false): Imdb {

        console.log(nombreFichero)
        const fileRead :string = fs.readFileSync(nombreFichero).toString();
        console.log(fileRead)
        let peliculasJSON = [];
        if (hasMovieField){

             peliculasJSON = JSON.parse(fileRead).movies;
        }else{
            
            peliculasJSON = JSON.parse(fileRead);
        }
        const peliculasArray: Movie[] = [];
        peliculasJSON.forEach((pelicula: { title: string; releaseYear: number; nacionality: string; genre: string }) => {

            peliculasArray.push(new Movie(pelicula.title, pelicula.releaseYear, pelicula.nacionality, pelicula.genre))
        })
        const imdbInstance: Imdb = new Imdb(peliculasArray);

        return imdbInstance;

    }
}