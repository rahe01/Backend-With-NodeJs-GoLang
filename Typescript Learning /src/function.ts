// Function
// arrow function , normal function

function add(num1:number, num2:number):number{
    return num1+num2;

}

add(5,4);



const addArrow = (num1 :number, num2:number):number => num1+num2;

addArrow(5,6);



// Object => function => method

const poorUser ={
    name : "John",
    balance : 5,
    addBalance(money:number):number{
        const totalbalance = this.balance + money;
        return totalbalance;
    }
}


poorUser.addBalance(10);



const arr: number[] = [1,2,3,4,5];

const sqrArr = arr.map((el:number):number => el*el);

console.log(sqrArr);

