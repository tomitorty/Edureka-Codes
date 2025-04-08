//class is used to define object blueprint.
Class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    greetings(){
        console.log('Hello my name is ${this.name} and I'm &{this.age} years old');
    }
}
const person1=new personalbar("khumo",25);// created an instance of class
person1:greetings;