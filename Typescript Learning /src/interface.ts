type User ={
    name : string;
    age : number;

}



interface IUser {
    name : string;
    age: number;

}


type Role ={
    role: 'admin'|'user';

}


interface IUserWithRole extends IUser {
    role :'admin' | 'user';
}

type UserWithRole = User &Role;


const user1: IUserWithRole ={
    name:"Rahe",
    age:34,
    role:'admin'
}


const user2 : IUser ={
    name:"Raheee",
    age :34,
}



type IsAdmin = boolean;


const isAdmin: IsAdmin =false


// function



interface Iadd {

    (num1 : number , num2: number) : number;
}

const add : Iadd = (num1, num2) => num1+num2;