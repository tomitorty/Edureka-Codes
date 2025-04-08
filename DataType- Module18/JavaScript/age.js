function Student(name,age,grade){

    this.name=name;

    this.age=age;

    this.grade=grade;

}

const student1=new Student("Joel",30,"A");

const student2=new Student("Tomy",30,"A+");

console.log(student1.name);

console.log(student2.age);

// A consturctor function is used to create multiple objects with the same structure.