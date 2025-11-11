// Generic Function




const createArrayString = (value : string) =>[value];

const createArrayNumber = (value: number) => [value];



const createArrayGeneric = <T>(value :T) =>{  return [value]}

const arr = createArrayGeneric(34);
const num = createArrayGeneric("sdfsdf")



// tuple 

const createArrayTuple = (param1 : string , param2: number) =>[param1 , param2];


const createArrayTupleGeneric = <X,Y>(param1 : X, param2: Y) =>[param1 , param2];

const res1 = createArrayTupleGeneric(2,'df')



const addStudent = <T> (studentInfo: T) =>{
    return {
        course :"NL",
        ...studentInfo,
    }
}

const st1 ={
    id: 123,
    name:"Rahe",
    hasPen : true
}


const st2 ={
    id: 123,
    name:"Rahe",
    hasPen : true,
    isCar : true
}