

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
    
    addBalance(balance : number){

        this.userBalance += balance;

    }
}


class StudentBank extends BangkAccount{
    test(){
        this.userBalance
        
    }
}




const raheBank = new BangkAccount(11, "rahe" , 23);


raheBank.addBalance(34);
