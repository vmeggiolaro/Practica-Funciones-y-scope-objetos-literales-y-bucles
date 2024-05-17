//practica funciones

function rectangulo (ancho, alto) {
    return ancho * alto
}

let area = rectangulo(5,3)
console.log(area);

function triangulo (base, altura) {
    return base * altura / 2
}

let area2 = triangulo(10,8)
console.log(area2);

let largoDelArray = ["array1", "array2"]
console.log(largoDelArray.length);


function CantidadDeLetras (palabra){
    return palabra.length
}

let palabra = "messi";
console.log(CantidadDeLetras(palabra));

function Dolarhoy (pesos,cambio){
    return pesos / cambio
}

let dolares = Dolarhoy(8500,1000)
console.log(dolares);

function precioFinal(precio,iva) {
    return precio * iva
}

let precioConIVA = precioFinal(100,1.21)
console.log(precioConIVA);

function mitad (num){
    return num / 2
}

let resultado1 = mitad(22)
console.log(resultado1);

//practica objetos literales

let misDatos={
    nombre: 'Valentin',
    apellido: 'Meggiolaro',
    edad: '17',
    dni: '47248591',
    comidasFavoritas: ['Asado', 'Sushi', 'Hamburguesas'],
    saludar: function() {
        return `Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años. Mi primera comida favorita es ${this.comidasFavoritas[0]}.`
    }
};

console.log(misDatos.saludar());

class Car {
    brand = "Honda";
    model = "Fit";
    year = "2008";
    color = "Negro";
    position = 0;
    

    goForward(meters) {
        this.position = this.position + meters;
        
    }

    goBackwards(meters) {
        this.position = this.position - meters;
        
    }
}

car= new Car()
car.goBackwards(2)
console.log(car.position); 


class autoNuevo {
    brand = "Honda";
    model = "Fit";
    year = "2008";
    color = "Negro";
    position = 0;

    move(meters) {
        this.position += meters; 
    }
}   

autoNuevo = new autoNuevo()
autoNuevo.move(10)
autoNuevo.move(-5)
console.log(autoNuevo.position);


let ironMan = {
    nombre: "Iron Man", 
    equipo: "Avengers", 
    poderes: ["Volar", "Lanzar misiles", "Disparar laser"], 
    energia: 100, 
    getPoder: function (n3){
        let energiarestante= this.energia - 10;
        return `Poder elegido de`+ this.nombre + `:`+  this.poderes [n3]+ `. energiarestante:` + this.energia;
         
    }
}


let Hulk = { 
    nombre: "Hulk", 
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"], 
    energia: 100, 
    getPoder: function (n3){
        let energiarestante= this.energia - 10;
        return `Poder elegido de`+ this.nombre + `:`+  this.poderes [n3]+ `. energiarestante:` + this.energia;
    }
}

console.log(ironMan.energia);
console.log(ironMan.getPoder(1))
console.log(Hulk.energia);
console.log(Hulk.getPoder(1));


//practica bucles

for (let i=0; i<5; i++ ) {
    console.log("Practicando con el bucle for");
}


for (let i=0; i<10; i++) {
    console.log(`La variable i tiene el valor ${i}`);
}

for (let i=2; i<=20; i+=2) {
    console.log(i);
}

for (let i=5; i<=250; i+=5) {
    console.log(i);
}

for (let i=100; i>=0; i--) {
    console.log(i);
}

let base = 2
let resultados = []

for (let i=0; i<10; i++) {
    resultados.push(base * i);
}

console.log(resultados);

let ganancias = [-25, -20, -15, -10, -5, 7, 12, 17, 22, 27]

let sumaTotal = 0;

for (let i=0; i<10; i++) {
    sumaTotal += ganancias[i];
}

console.log("El total de ganancias es:", sumaTotal);

let healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
]

for (let i=0; i<healingIsDifficult.length; i++) {
    console.log((i+1)+" "+healingIsDifficult[i]);
}

let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]

for (let i=0; i<got.length; i++) {
    let persona = got[i];
    console.log(`Hola ${persona.nombre} ${persona.apellido} criatura viajera!`);
    if (persona.ciudad) {
        console.log(`Soy ${persona.nombre} ${persona.apellido} de la ciudad ${persona.ciudad}`);
    }
}