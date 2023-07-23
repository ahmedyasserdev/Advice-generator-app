let adviceId = document.querySelector("#adviceId");
let adviceText = document.querySelector("#adviceText");
let btn = document.querySelector("#btn");

async function fetchAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    return data;
}

btn.addEventListener("click", () => {
    setAdvice()
});



function setAdvice() {
    fetchAdvice().then(advice => {
        adviceId.innerHTML = advice.slip.id;
        adviceText.innerHTML = advice.slip.advice;
    });
}

window.onload  =   setAdvice();





// https://api.adviceslip.com/advice




