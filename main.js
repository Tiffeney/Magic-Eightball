console.log(`JS LOADED`)

var magic8Ball = {};
var input = document.querySelector("input");
var answer = document.getElementById("answer");
var magiceresponse = ["It is certain", "It is decidedly so", 
                          "Better not tell you now", "Ask again later", 
                          "Very Doubtful", "Don't count on it"];

var form = document.querySelector("form"); //selecting the form tag

form.addEventListener("submit", function(e) { //attaching event listener to form element and listening for submit event
    e.preventDefault(); //
    let message = input.value; //grabbing the text inside the input element and assigning to a variable called message.
    input.value = ""; // 
    let response = magiceresponse[Math.floor(Math.random() * magiceresponse.length)]; // auto generate responses
    console.log(response);
})

