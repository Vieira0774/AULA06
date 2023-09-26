console.log("este arquivo está sendo lido corretamente");


const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");


btn1.addEventListener("click", funcaoA);
btn2.addEventListener("click", function(){
    setTimeout(funcaoA, 3000);
})
btn3.addEventListener("click", function(){
    setInterval(funcaoA, 500)
})

let cores = ["preto" , "vermelho", "branco", "laranja"]


function funcaoA(){
   let n = Math.floor(Math.random() * 4)
   console.log(cores[n])
}


