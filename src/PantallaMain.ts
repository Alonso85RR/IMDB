import { Imdb } from "./Imdb";
import { Movie } from "./Movie";

let inquirer = require('inquirer');
let imdbInstance = new Imdb([]);
let questions = [
    {
      type: 'input',
      name: 'title',
      message: "¿Cual es título de la película?"
    },
    {
        type: 'input',
        name: 'year',
        message: "¿Cual es  el año?"
    },
    
    {
        type: 'input',
        name: 'pais',
        message: "¿Cual es  el Pais?"
    },
    {
    type: 'input',
    name: 'genre',
    message: "¿Cual es el genero de la película?"
    }
  ]
  
  inquirer.prompt(questions).then((answers: { [x: string]: any; }) => {
    //console.log(`Hi ${answers['name']}!`)
    let instancia = imdbInstance.obtenerInstaciaIMDB("imdbBBDD.json", true);
    let pelicula = answers['title']
    let year =  answers['year']
    let pais = answers['pais']
    let genre =  answers['genre']
    let nuevaPelicula = new Movie(pelicula,year,pais,genre)
    instancia.movies.push(nuevaPelicula);
    instancia.escribirEnFicheroJSON("imdbBBDD.json")
  })