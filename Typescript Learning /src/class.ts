

class Animal {
    //public name : string;
    //public sound : string;
   // public species : string;

    constructor( public name: string, public sound: string, public species: string){
        //this.name = name;
       // this.sound = sound;
       // this.species = species
    }

    makesound(){
        console.log(`${this.name} is making sound`);
    }
}


const dog = new Animal("Kemm" , "ghew" , "american")

console.log(dog.name);
const dog1 = new Animal("Kemm" , "ghew" , "american")
dog.makesound()