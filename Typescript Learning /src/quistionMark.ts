//  ?: ternary operator
// ??: nullish coaleasing operator || null or undefined
//  ?. optional chaining operator

// Example usage of the ternary operator

const userAge = 21;



const canDrink =(age:number) =>{
    if (age >= 21){
        return 'Yes, can drink alcohol';
    } else {
        return 'No, cannot drink alcohol';
    }
}


canDrink(userAge); // Yes, can drink alcohol

const canDrive =(age:number) => age >= 18 ? 'Yes, can drive' : 'No, cannot drive';

canDrive(userAge); // Yes, can drive


// Example usage of the nullish coalescing operator

const userTheme = undefined;

const theme = userTheme ?? 'light mode';

console.log(theme); // light mode


// Example usage of the optional chaining operator


const user : {
    address:{
        city:string;
        zip?:string;
    }
} ={
    address :{
        city : 'New York',
        
    }
}


const userZip = user.address?.zip ?? 'No zip code provided';

console.log(userZip); 