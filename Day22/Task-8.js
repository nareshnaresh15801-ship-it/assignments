class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
}
  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
}
const s1 = new Student("Naresh", 18, "A1+");
const s2 = new Student("Gokul", 19, "o+");
const s3 = new Student("vicky", 18, "A+");
s1.display();
s2.display();
s3.display();