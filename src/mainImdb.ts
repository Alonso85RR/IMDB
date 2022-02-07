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