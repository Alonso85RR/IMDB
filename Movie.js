"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
class Movie {
    // CONSTRUCTOR
    constructor(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        //this.actors = this.actors;
        this.nacionality = nacionality;
        /*this.director;
        this.writer;
        this.language;
        this.plataform;
        this.isMCU;
        this.mainCharacterName;
        this.producer;
        this.distributor;*/
        this.genre = genre;
    }
    // GETERS Y SETTER NO HAY QUE HACER PUES SON PUBLICOS
    // DEFINICION DE METODOS PUBLICOS
    printAll() {
        console.log(this.title);
        console.log(this.releaseYear);
        console.log(this.nacionality);
        console.log(this.genre);
        /*console.log(this.actors);
        console.log(this.director);
        console.log(this.writer);
        console.log(this.language);
        console.log(this.plataform);
        console.log(this.isMCU);
        console.log(this.mainCharacterName);
        console.log(this.producer);
        console.log(this.distributor);
        */
    }
}
exports.Movie = Movie;
