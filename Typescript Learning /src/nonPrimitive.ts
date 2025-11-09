// array , object , tuple

let bazarList: string[] = ["eggs" , 'milk', 'sugar'];

bazarList.push('oil');


let mixedArray :(string| number | boolean )[]= [112 , 'hello' , true , 45.6];
mixedArray.push('world');
mixedArray.push(789);
mixedArray.push(false);



// tuple

let coordinates :[number,number]= [20,30]

let couple: [string, string] = ['Husband' , 'wife']

let nameAndRoll:[string, number] = ['Alice' , 23];


let destination :[string, string, number]= ['India' , 'USA' , 100];



// reference type : object


const user:{
    firstname : string;
    middlename ?: string;
    lastname : string;
    isMarried ?: boolean;
    organization : "PH"; //value => type . Literal type
    readonly id : number;
} ={
    firstname : 'Rahat',
     middlename: 'Ahmed',
    lastname : 'Rahe',
    isMarried : false,
    organization : "PH",
    id : 1122
   

}


console.log(user);




