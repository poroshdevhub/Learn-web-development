
class Parent{
    constructor(){
        this.fname= 'fatherName';
    }
}

class Student  extends Parent {
    constructor(id, name) {
        super();
        this.id = id;
        this.name = name;
    }
    getFullName(){
        return this.fname ;
    }
}

const student1 = new Student(1, 'noman');
const student2 = new Student(2, 'mahiya' , 'jhontu');
console.log(student1, student2.getFullName());
