import { Profesional } from "./Profesional";

export class Movie
{
    // DECLARACION DE ATRIBUTOS

    public title: string;
    public releaseYear: number;
   // public actors: Profesional[];
    public nacionality: string;
   /* public director: object;
    public writer: object;
    public language: string;
    public plataform: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;*/
    public genre: string;

    // CONSTRUCTOR

    constructor(title:string, releaseYear:number,nacionality:string, genre:string)
    {
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
        this.genre= genre;

    }

    // GETERS Y SETTER NO HAY QUE HACER PUES SON PUBLICOS

    // DEFINICION DE METODOS PUBLICOS

    public printAll():void
    {

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