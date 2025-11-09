// nullable types

const getUser =(input : string | null) =>{

    if(input){
        console.log(`User input is: ${input}`);
    }
    else{
        console.log('No user input provided all user');
    }
}

getUser('Hello World'); // User input is: Hello World
getUser(null); // No user input provided all user

// unknown type

const productDiscount = (input:unknown) =>{

    if(typeof input === 'number'){
        const discount = input * 0.1;
        console.log(`Discount is: ${discount}`);
    }
    else if (typeof input === 'string'){
        const [discountPrice] = input.split(" ");
        const discount = Number(discountPrice) * 0.1;
        console.log(`Discount is: ${discount}`);

    }
    
    else {
        console.log('Invalid input for discount');
    }

}