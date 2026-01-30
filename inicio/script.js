console.log("Esta carpeta contiene los archivos de una rama llamada inicio");

class Animal {
    constructor(tamaño, raza){
      this.tamaño = tamaño,
      this.raza = raza
    }


    ladrar(){
        console.log(ladrar);
    }
}





const pitbull = new Animal(50, "pitbull");
console.log(pitbull);



class Pitbull extends Animal{
    constructor(tamaño, raza, nombre){
        super(tamaño, raza);
        this.nombre = nombre;
    }
}


const pancho = new Pitbull(23, "pitbull", "pancho");

console.log(pancho);