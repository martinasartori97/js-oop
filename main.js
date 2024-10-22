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
    marca;
    anno;
    colore;
    porte;


    constructor(marca, anno, colore, porte, carburante = 'veicolo') {
        this.marca = marca;
        this.anno = anno;
        this.colore = colore;
        this.porte = porte;
        this.carburante = carburante;

    }







    infoVeicolo() {
        return `${this.marca}, ${this.anno}, ${this.porte}, ${this.carburante}`;

    }




    informazioni() {
        return `${this.marca}, ${this.anno},${this.colore},${this.porte},${this.carburante};`
    }
}




const fiat = new Veicolo('Fiat', 2019, 'Blu', 5, 'Benzina');


console.log(fiat.infoVeicolo);












