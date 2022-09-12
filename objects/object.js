// object literals for creating objects
 let car={
    name:'Mercedes',
    topSpeed: 160,
    run: function(){
        console.log("car is running");
    }
}
// but this way of making objects is not preferred as
// whenever you want to make a change you will have to make that change
// in every object
// so we will use constructor to make an object literals in below code
console.log(car);
console.log(car.run());

// we have already seen constructors like this
// new Date();

// creating a constructor for car
function generalCar(name, topSpeed){
    this.name = name;
    this.topSpeed = topSpeed; 
    this.run = function(){
        console.log(`${this.name} is running`);
    }
}

car1 = new generalCar('mercedes', 160);
car2 = new generalCar('maruti', 100);
console.log(typeof car1);
console.log(car2.run());