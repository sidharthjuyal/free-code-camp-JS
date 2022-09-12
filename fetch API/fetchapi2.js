function getData(){
    console.log("starting getData()");
    url = "https://api.github.com/users";
    fetch(url).then((response)=>{
    console.log("Inside first then: ");
    // response.json() data object ke form me bhejta hai
          return response.json();
    }).then((data)=>{
    console.log("Inside second then: ");
          console.log(data);
    });
}

function postData(){
    url = "	https://dummy.restapiexample.com/api/v1/create";
    // data is already in string form
    data = '{"name":"Sidharth","salary":"123","age":"23"} ';
    params = {
        method:'post',
        header: {
            'content-type':'application/json'
        },
        body: data
        // agar data object hai to use JSON.stringify()
    }

    fetch(url,params).then( response => response.json()).then(data => console.log(data));
    // if you have one line in arrow functions
    // then you can ommit the curly braces and return
}

// getData();
postData();