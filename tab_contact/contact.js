let btnElm = document.getElementById("result");
let answerElm = document.getElementById("answer");
let background = document.getElementsByTagName("html");
btnElm.addEventListener("click", function() {
    answerElm.style.display = "block";
    background.style.opacity = 0.4;
})
