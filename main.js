console.log("hello");


/*In questo esercizio, dovrai creare una classe in JavaScript chiamata "Veicolo" con alcune proprietà e metodi.
//La classe "Veicolo" dovrebbe avere le seguenti caratteristiche:
 - marca
 - anno
 - colore
 - porte
 - carburante
*/


class Veicolo {
    constructor(marca, anno, colore, porte, carburante) {
        this.marca = marca;
        this.anno = anno;
        this.colore = colore;
        this.porte = porte;
        this.carburante = carburante;

    }

    get infoVeicolo() {
        return `${this.marca}, ${this.anno}, ${this.porte}, ${this.carburante}`;
    }



}
console.log(Veicolo);

const fiat = new Veicolo("fiat", 19, "blu");

informazioni(){
    return `${this.marca}, ${this.anno},${this.colore}`;
}




