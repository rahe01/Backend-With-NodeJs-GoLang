let anything : any;

anything = "rahe";

(anything as string)

const kgToGm = (input :string | number) : string |number|undefined=> {

    if (typeof input === 'number'){
        return input *1000;
    }
    else if(typeof input === 'string'){
        const [value] = input.split(" ")
        return `Conted output is ${Number(value)*1000}`
    }

}


const result1 = kgToGm(3) as number;
const result2 = kgToGm('2 kg') as string;
console.log(result1);
console.log(result2);




type CustomError ={
    message: string;
}



try {

}
catch(err){

    console.log((err as CustomError).message)
}