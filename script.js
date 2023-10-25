//Declare variables using DOM
let output_display = document.getElementById("output_display");
let clear =document.getElementById("clear");
let calculate = document.getElementById("calculate");
let number = document.getElementsByClassName("number");

//number function code
for (let i = 0; i < number.length; i++){
    number[i].addEventListener("click",function(){
       output_display.innerHTML += number[i].innerHTML;
    })
}

//clear function code
clear.addEventListener("click",function(){
    output_display.innerHTML="";
})

//claculate function code
calculate.addEventListener("click",function(){
    let result = eval(output_display.innerHTML);
    output_display.innerHTML = result;
})
