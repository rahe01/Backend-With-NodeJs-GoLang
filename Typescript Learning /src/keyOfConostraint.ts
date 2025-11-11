// keyof : type operator 

type RichPeopleVehicle ={
    car: string;
    bike: string;
    cng: string;

}

type MyVehichle1 = "bike" | "car" | "cng";
type MyVehichle2 = keyof RichPeopleVehicle;


const myVehichle: MyVehichle2 = "bike" ;








type User ={
    id:number;
    name: string;
    address :{
        city:string;
    }
}

const user : User={
    id:45,
    name : "Rahe",
    address : {
        city:"cox",
    },
};


// const myId = user.id;
// const myName = user['name'];

// console.log(myId,myName);




const getPropertyFromObj =<X> (obj:X, key: keyof X) =>{
    return obj[key]
}

const result = getPropertyFromObj(user, "id")

console.log(result);


const product ={
    barng: "ar",
}

const result1 = getPropertyFromObj(product , 'barng');
console.log(result1)









