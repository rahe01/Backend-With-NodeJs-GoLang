// Primitive types

const name: string = "Rahat Ahmed Rahe";

const num: number = 123;

let isAdmin = true;

isAdmin = false;

// Non primitive types

// array

let arr: string[] = ["Rahe", "Ahmed", "Rahat"];
arr.pop();

// console.log(arr);

let mixedArray: (string | boolean | number)[] = [121, "Rahe", true];
mixedArray.push(34);
mixedArray.pop();
mixedArray.push(false);

// console.log(mixedArray);

// tuple

let info: [number, string] = [4, "rahe"];

// referance type -> Object

const user: {
  firstName: string;
  middleName?: string;
  lastName: string;

  isMarrid: boolean;
  org: "PH" | "Phitron";
  readonly id: number;
} = {
  firstName: "Rahat",
  lastName: "Rahe",
  isMarrid: false,
  org: "PH",
  id: 23,
};

// console.log(user);

// spreed operator

const friend: string[] = ["jhountu", "pintu", "mintu"];
const collegeFriend: string[] = ["kemi", "min"];
const uniFriend: string[] = ["Mr rock", "Emiii"];

friend.push(...collegeFriend, ...uniFriend);
// console.log(friend);

let users = {
  name: "Rahe",
};

let userinfo = {
  lastName: "Ahmed",
};

const userInfo = { ...users, ...userinfo };
// console.log(userInfo);

// rest operator

const sendInvite = (...friends: string[]) => {
  friends.forEach((friend: string): void => {
    // console.log(`Invitation sent to ${friend} `);
  });
};

sendInvite(
  "Alice",
  "Bob",
  "Alice",
  "Bob",
  "Alice",
  "Bob",
  "Alice",
  "Bob",
  "Alice",
  "Bob",
  "Alice",
  "Bob"
);

// Destructuring

const User: {
  firstName: string;
  middleName?: string;
  lastName: string;
  address: {
    city: string;
    district: string;
  };
  isMarrid: boolean;
  org: "PH" | "Phitron";
  readonly id: number;
} = {
  firstName: "Rahat",
  lastName: "Rahe",
  address: {
    city: "Kurigram",
    district: "Kurigram",
  },
  isMarrid: false,
  org: "PH",
  id: 23,
};

const { firstName, lastName  , address:{city , district:dis}} = User;

// console.log(firstName, lastName , city, dis);



// Type alias

type Users ={
    firstName: string;
  middleName?: string;
  lastName: string;
  address: {
    city: string;
    district: string;
  };
  isMarrid: boolean;
  org: "PH" | "Phitron";
  readonly id: number;
}



const user1 : Users={
    firstName: "Rahat",
  lastName: "Rahe",
  address: {
    city: "Kurigram",
    district: "Kurigram",
  },
  isMarrid: false,
  org: "PH",
  id: 23,
}


const user2:Users={
    firstName: "Rahat",
  lastName: "Rahe",
  address: {
    city: "Kurigram",
    district: "Kurigdfsfsdfram",
  },
  isMarrid: false,
  org: "PH",
  id: 23,
}


// Union operator 



type UserRole = 'admin' | 'user' | 'guest';


const Dashboard =(role:UserRole) =>{
    if(role === "admin"){
        console.log("Admin Dashboard");
    }

    else if(role === "user"){
        console.log("user Dashboard");
    }

    else{
        console.log("Guest Dashboard")
    }

}


Dashboard("guest")


// Intersection 


type Employee ={
    name : string;
    id : string;
    phone: string;
}

type Manager ={
    teamsize: number;

}


type ManagementEmployee = Employee & Manager;

const user11 : ManagementEmployee ={
    name: "Rahe",
    id:"384",
    phone: "934",
    teamsize:98

}