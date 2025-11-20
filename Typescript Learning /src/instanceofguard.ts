

class Person{

    name : string;

    constructor(name: string){
        this.name = name;
    }

     doGum(numOfStd: number){
        console.log(`${this.name} er gum ${numOfStd}`)
    }
}



class student extends Person{

    constructor( name : string){
        super(name)
    }

    doStudy(numOfStd: number){
        console.log(`${this.name} er std ${numOfStd}`)
    }
}

class student1 extends Person{

    constructor( name : string){
        super(name)
    }

    doHome(numOfStd: number){
        console.log(`${this.name} er std ${numOfStd}`)
    }
}


const person =(user: Object) =>{

    if(user instanceof student){
        user.doGum;
    }

    else if(user instanceof student1){
        user.doHome
    }




}