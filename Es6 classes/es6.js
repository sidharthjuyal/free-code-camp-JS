class Employee {
    constructor(name, experience, division){
    this.name = name;
    this.experience = experience;
    this.division = division;
    }

    slogan(){
        console.log(`Iam ${this.name} employee!`);
    }
    joiningYear(){
       console.log( `Working since ${2019 - this.experience}` );
    }

    static add(a,b){
        return a+b;
    }
}

// inheritance

class Programmer extends Employee{
    constructor(name, experience, division, language, github){
        super(name,experience,division);
        // super  used to get the reference of the constructor of the base class
        this.language = language;
        this.github = github;
        // this is an internal pointer
        // this references to the caller object
    }

    static favLanguage(){
        if(this.language == 'python')
           return 'python';
           else
           return 'javascript';
    }
}


let sid = new Employee("Sidharth", 2, "A+");
console.log(sid);
sid.slogan();
sid.joiningYear();
// static function can be accessed by simply employee classname 
console.log(Employee.add(2,4));


let p = new Programmer("sidharth",2,"A+","JS","sidharthjuyal.github.io");
console.log(p);
console.log(Programmer.favLanguage());
