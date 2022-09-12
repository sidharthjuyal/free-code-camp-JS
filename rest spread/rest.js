function sum(name,...args){
    let sum = 0;
    for(i of args)
    sum+=i;
    console.log(sum);
    console.log(typeof args);
}

sum("sid",1,2,3,4)