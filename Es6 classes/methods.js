class Student{
    constructor(name, age, subject, exp){
          this.name = name;
          this.age = age;
          this.subject = subject;
          this.exp = exp;
    }

    message(){
        console.log("hello Student");
    }

    show(){
        console.log(this.name, this.age, this.subject, this.exp);
    }

    static text(){
        console.log("this is  a static function");
        }
}

let obj = new Student("sid",21,"javascript",3);
obj.message();
obj.show();
Student.text();
