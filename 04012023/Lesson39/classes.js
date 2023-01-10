class Person {
    constructor(fName, sName, age) {
      this.fName = fName;
      this.sName = sName;
      this.age = age;
    }

  constructor(fName, age) {
    this.fName = fName;
    this.age = age;
  }

  getFullName() {
    return `${this.fName} ${this.sName}`;
  }
  getAge() {
    return this.age;
  }
}

class Proffesor extends Person {
  constructor(course, fName, sName, age) {
    super(fName, sName, age);
    this.course = course;
  }
}

class Student extends Person {
  constructor(fName, sName, age, enrolledCourse) {
    super(fName, age);
    this.enrolledCourse = enrolledCourse;
  }
}

const professorOne = new Proffesor("JavaScript", "Ermia", "Hassanpour", 26);
console.log(professorOne.getFullName());

const studentOne = new Student("Ermia", "Hassanpour", 26, "JavaScript");
console.log(studentOne.getAge());
