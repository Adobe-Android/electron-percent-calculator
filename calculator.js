document.getElementById("percent-btn").addEventListener("click", calculate);
document.getElementById("clear-btn").addEventListener("click", clear);

function calculate() {
    let firstNum = document.getElementById("number-box").value;
    let secondNum = document.getElementById("percent-box").value;
    let percentage = firstNum * (secondNum / 100).toFixed(2);
    document.getElementById("output-box").value = percentage;    
}

function clear() {
    document.getElementById("number-box").value = "";
    document.getElementById("percent-box").value = "";
    document.getElementById("output-box").value = "";
}