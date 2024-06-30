function Person(name,age){
    this.name = name;
    this.age = age;
};

Person.prototype.talk (); {
    console.log("hi");
}

let p1 = new Person("suvin",18)
let p2 = new Person("yash",19)