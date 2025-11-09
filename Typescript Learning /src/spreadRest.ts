// spread operators

const friends = ['Alice', 'Bob', 'Charlie'];
const schoolFriends = ['David', 'Eve'];
const collegeFriends = ['Frank', 'Grace'];


friends.push(...schoolFriends);
friends.push(...collegeFriends);

console.log(friends);

const user={
    fullName : "John Doe",
    phone : "555-1234"
}

const otherinfo ={
    hobbies : 'gaming',
    isMarried : false,
    age : 25
}

const userInfo = {...user, ...otherinfo};

console.log(userInfo);




// rest operators




const sendInvite =(...friends:string[])=>{

    friends.forEach((friend:string):void =>{
        console.log(`Inviting ${friend} to the party.`);
    })

   

}




sendInvite('Alice', 'Bob','Alice', 'Bob','Alice', 'Bob','Alice', 'Bob','Alice', 'Bob','Alice', 'Bob');
