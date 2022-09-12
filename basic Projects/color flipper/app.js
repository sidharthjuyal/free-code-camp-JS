const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
let prev= -1;

btn.addEventListener('click',()=>{
    let randomNumber = getRandom();
    // if previous is same
    if(prev == randomNumber && randomNumber == (colors.length-1) ){
        randomNumber--;
    }
    else if(prev == randomNumber && randomNumber == 0 ){
        randomNumber++;
    }
    else if(prev == randomNumber)
    {
        randomNumber++;
    }
    prev = randomNumber;
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.innerHTML = colors[randomNumber];
});

function getRandom(){
    return Math.round((colors.length-1)*Math.random());
}



