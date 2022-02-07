import { Imdb } from "./Imdb";
import { Movie } from "./Movie";
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


