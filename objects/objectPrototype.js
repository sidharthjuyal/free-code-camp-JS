
// contructor to create an object literal
function Obj(name){
   this.name = name;
}

// object prototype me getNaam define krna
Obj.prototype.getNaam = function(){
   return this.name;
}

// object prototype me setNaam define krna
// used to add new property or operation to the object
Obj.prototype.setNaam = function(name){
    this.name = name;
}

/*
JavaScript prototypes are used to access properties and
 methods of objects. Inherited properties are originally 
 defined in the prototype or parent object. The Date object
  is inherited from Date.prototype, Array object inherits 
  from Array.prototype etc. The prototypes may be used to 
  add new properties and methods to the existing objects 
  and object constructor
*/

let objii = new Obj("Siddharth Juyal");
console.log(objii.getNaam());
objii.setNaam("Sid Juyal");
console.log(objii.getNaam());

// prototype inheritance
/* 
javaScript doesn’t use classical inheritance instead it
 uses the phenomenon called Prototype Inheritance.

 Prototype Inheritance is a phenomena when an object uses the properties or methods of another object.
All the JavaScript objects inherit properties and methods
 from a prototype (like Date objects inherit properties 
 from Date.prototype and so on). 
 */