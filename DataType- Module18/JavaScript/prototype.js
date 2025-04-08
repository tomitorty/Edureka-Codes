function Animal(name){

    this.name=name;

}

Animal.prototype.speak=function(){

    console.log(`${this.name} makes sound`);

}

const dog=new Animal("Dog");

dog.speak();

const donkey=new Animal("Donkey");

donkey.speak();