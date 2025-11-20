class Common{

    name : string;
    age : number;
    address : string;

    constructor(name : string, age: number, address: string){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep(numOfslp: number){
        console.log(`${this.name} ato gonta gumy ${numOfslp}`)
    }
}

class student extends Common{

    roll : number;

    constructor(name: string, age: number, address: string, roll: number){
        super(name, age, address);

        this.roll = roll;
    }
}

class teacher extends Common{

    designation : string;

    constructor(name: string, age:number, address: string , designation: string){
        super(name, age, address);

        this.designation =  designation;
    }




}








const st1 = new student("Rahe" , 34,"kgm" , 45);
const tc1 = new teacher("dsf" , 45, "dh" , "teacher")
tc1.getSleep(45)

st1.getSleep(34);