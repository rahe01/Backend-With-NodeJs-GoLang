


const arrayOfNum : number[] = [1,3,4,5,6,7];

const arrayOfStr : string[] = ['2','4'];


const arrayOfStringUsingMap : string[] = arrayOfNum.map((num) => num.toString());

console.log(arrayOfStringUsingMap)



type AreaOfNumber = {

    height : number;
    width : number;
}





type Area<T> ={
    [key in keyof T] : boolean;
    
}


