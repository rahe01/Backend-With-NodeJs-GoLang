// conditional type : je type condition er upor nirvorsheel 



type A = null;
type B = undefined;


type C = A extends number ? true : B extends undefined ? true : false;



type RichPeople ={
    bike : string;
    car : string;
    ship : string;
}


type Check<T> = T extends keyof RichPeople ? true :false;

type HasBike = Check<"bike">