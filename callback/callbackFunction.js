// pretend that this response is coming from the server
const students = [
    {name:"Sid",subject:"web development"},
    {name:"Ansh",subject:"Data Analytics"}
]

// callback function, function ke andar ek function
// for ex: myObj.forEach(()=>{});

function enrollStudents(student,callback){
    setTimeout(function(){
       students.push(student);
       callback();
    },1000);
}

function getStudents(){
    setTimeout(function(){
       let str = "";
       students.forEach(function(student){
        str+=`<li>${student.name}</li>`
       });
       document.getElementById('students').innerHTML = str;
    },500);
}

let newStudent = {name:"Akash",subject:"java"};
enrollStudents(newStudent,getStudents);

// so enrollStudents ne getStudents ko pakad ke rakha
// even though enrollStudents getStudents se late me execute hota
// enrollStudents ne tabtak getS ko pkd ke rkha jbtk vo execute na hojaae;
// this is called callback function.
