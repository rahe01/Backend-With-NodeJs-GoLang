

class BangkAccount {
    readonly userId : number;
    userName : string;
    //private userBalance :number;
    protected userBalance :number;

    constructor(userId : number , userName: string, userBalance : number){
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance
    }
    
    // addBalance(balance : number){

    //     this.userBalance += balance;

    // }

    set addBalance(amount: number){
        this.userBalance += amount;
    }

    // get korbo
    // getBalance(){
    //     return this.userBalance;
    // }


    get getBalance(){
        return this.userBalance;
    }
}




const raheBank = new BangkAccount(11, "rahe" , 20);


raheBank.addBalance =40;

console.log(raheBank.getBalance)