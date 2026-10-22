let name=document.querySelector("#input");
let button=document.querySelector("#button")
let text=document.querySelector(".text")
button.addEventListener("click", function(){
    if (name.value!==""){
        text.textContent="Привет, "+name.value +"!"
    }
    else{
        text.textContent="Введите имя!"
    }
})