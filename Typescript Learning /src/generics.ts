// dynamically generalize 


type GenericArray<T> = Array<T>





// const friends : string[] =['Mr x' , 'Mr y', 'Mr z'];
const friends : GenericArray<string> =['Mr x' , 'Mr y', 'Mr z'];


// const rollNumber : number[] =[4,5,6];
const rollNumber : GenericArray<number> =[4,5,6];


// const isEligibleList : boolean[] =[true, false, true];

const isEligibleList : GenericArray<boolean> =[true, false, true];



const sqr = (value:number) =>{
    return value *value
}

sqr(4)


type Coordinates<X,Y> = [X,Y];

const Coordinatess: Coordinates<number , number> =[23,45]
const Coordinatesss: Coordinates<string, string> =['34' , '34']





const userList : GenericArray<object > =[
    {
        name : 'rahe',
        age : 56,
    },
    {
        name: 'reee',
        age:45,
    }
]