function sum(){
    let sum = 0;
    for(i of arguments)
    sum+=i;
    console.log(sum);
    console.log(arguments);
}

sum(1,2,3,4)