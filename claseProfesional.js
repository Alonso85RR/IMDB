var Profesional = /** @class */ (function () {
    // CONSTRUCTOR
    function Profesional(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarNumber, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarNumber;
        this.profession = profession;
    }
    // GETTER Y SETER NO HACE FALTA YA QUE SON ATRIBUTOS PUBLICOS
    // DEFINICION DE METODOS PUBLICOS
    Profesional.prototype.printAll = function () {
        console.log(this.name);
        console.log(this.age);
        console.log(this.genre);
        console.log(this.weight);
        console.log(this.height);
        console.log(this.hairColor);
        console.log(this.eyeColor);
        console.log(this.race);
        console.log(this.isRetired);
        console.log(this.nationality);
        console.log(this.oscarsNumber);
        console.log(this.profession);
    };
    return Profesional;
}());
// MAIN
var profesional1 = new Profesional("Alonso", 36, "comedia", 90, 180, "marron", "negro", "carrera", true, "espaniol", 7, "actor");
console.log(profesional1.printAll());
