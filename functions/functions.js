let Name = 'Sid, ';

function greet(Name, Thank){
    console.log(`Hey! ${Name} ${Thank}`);
    return 4;
}

greet(Name, 'Thanks a lot!');

// function returning a value
var num = greet(Name, 'Thanks a lot!');
console.log(num);

// function in an object
let myObj = {
    Name: 'Sidharth',
    uid: 1220,
    greet: function(){
        return "Hello!";
    }
}
console.log(myObj.greet());

// array and functions
let arr = ['fruit', 'vegies', 'furniture'];

arr.forEach(function(element, index, array){
    console.log(element, index, array);
});


// arrow functions
let greeter = ()=> "good morning";
// one liners do not require braces
// one line will automatically return
console.log(greeter());
// object using arrow functions
greeter = ()=>({name: "sid"});
console.log(greeter());

greeter = (name)=> "good morning "+name;
console.log(greeter("siddhu!"));

greeter = (a,b,c)=>{
    if(a>b)
    {
        if(a>c)
         return a;
    }
    else if(b>c){
        return b;
    }
    return c;
}
console.log(greeter(2,5,1));
