class Person{




    getSleep(){
        console.log(`I am a normal person .sleep for 8 hours`);
    }




}


class Student extends Person{

    getSleep() {
        console.log(`I am a Student . I sleep 7 houres`)
        
    }
}


class NextLD extends Person{
    getSleep(){
        console.log(`I am a Student of Ph . I sleep 5 houres`)
    }
}


const getSleep =(params: Person)=>{
    params.getSleep();


}


const person1 = new Person();
const person2 = new Student();
const person3  = new NextLD();

getSleep(person2);