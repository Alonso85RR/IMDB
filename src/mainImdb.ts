import { Imdb } from "./Imdb";
import { Movie } from "./Movie";
import fs from "fs";
let arrayMovies:Movie[] = [];
let movie1 = new Movie("Indiana Jones", 1993, "EEUU", "Ciencia Ficcion");
let movie2 = new Movie("Start trek", 1988, "EEUU", "Ciencia Ficcion");

arrayMovies.push(movie1);
arrayMovies.push(movie2);
let imdb1 = new Imdb(arrayMovies);


imdb1.movies.forEach(movie=>{
    movie.printAll();
    console.log("#############");
})
/*
console.log("JSON")
console.log();
*/
const file = JSON.stringify(imdb1);

fs.writeFileSync("imdbBBDD.json" , file);

const fileRead :string = fs.readFileSync("imdbBBDD.json").toString();


const peliculasJSON = JSON.parse(fileRead).movies;
const peliculasArray : Movie[] = [];
peliculasJSON.forEach((pelicula: { title: string; releaseYear:number; nacionality: string; genre:string}) =>{
 
    peliculasArray.push(new Movie(pelicula.title, pelicula.releaseYear, pelicula.nacionality, pelicula.genre))
})
const imdbInstance : Imdb = new Imdb(peliculasArray);

imdbInstance.movies.forEach(pelicula=>{
    pelicula.printAll();
})


// IMDB CREAR NUEVO PARA PROBAR METODO INTERNO


let arrayMoviesInterno:Movie[] = [];
let movieTestInterno1 = new Movie("Harry Potter", 2000, "Londres", "Magia");

let movieTestInterno2 = new Movie("Harry Potter 2", 2002, "Londres", "Magia");

arrayMoviesInterno.push(movieTestInterno1);

arrayMoviesInterno.push(movieTestInterno2);
let imdbInterno = new Imdb(arrayMoviesInterno);

imdbInterno.escribirEnFicheroJSON("PeliculasPotter.json");

let imdbGenerado = imdbInterno.obtenerInstaciaIMDB("PeliculasPotter.json");

imdbGenerado.movies.forEach(pelicula=>{
    console.log("DEL GENERADO INTERNAMENTE")
    pelicula.printAll();
})