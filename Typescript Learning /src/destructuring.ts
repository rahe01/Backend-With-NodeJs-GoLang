// Object destructuring

const user ={
    id : 1,
    name:{
        firstName : "John",
        middleName : "M",
        lastName : "Doe"
    },
    gender : 'male',
    favouriteColors : 'green'
}

// const myLast = user.name.lastName;

const {favouriteColors : mycol , name:{lastName:myname}} =user;
console.log(mycol);
console.log(myname);




// Array destructuring


const friends = ['Alice', 'Bob', 'Charlie', 'David'];

const [, mybest] = friends;

console.log(mybest);