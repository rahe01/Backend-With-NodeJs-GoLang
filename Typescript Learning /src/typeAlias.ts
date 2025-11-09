
type User ={
      id : number,
    name : {
        firstName : string,
        middleName : string,
        lastName : string
    },
    gender : 'male'|'female',
    contact : string,
    address :{
        division : string,
        district : string,
        thana : string
    }


}




const user1: User ={
    id : 1,
    name : {
        firstName : "Jane",
        middleName : "A",
        lastName : "Smith"
    },
    gender :'male',
    contact : "123-456-7890",
    address :{
        division : "Dhaka",
        district : "Dhaka",
        thana : "Dhanmondi"
    },


}



const user2 : User={
     id : 1,
    name : {
        firstName : "Jane",
        middleName : "A",
        lastName : "Smith"
    },
    gender :'male',
    contact : "123-456-7890",
    address :{
        division : "Dhaka",
        district : "Dhaka",
        thana : "Dhanmondi"
    },

}




const isAdmin : boolean = false;

type Name = string

const myName: Name = "Your Name";




type AddFunc = (num1: number, num2: number) => number;


const add: AddFunc = (num1, num2) => num1 + num2;