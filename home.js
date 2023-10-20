let mybutton = document.getElementById("myBtn");

mybutton.addEventListener("click",function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});




let show = document.getElementById("hotline");
let hide = document.getElementById("popbtn");
let popup = document.getElementById("popup");
show.addEventListener("click", function(){
    popup.style.display = 'block';
})
hide.addEventListener("click", function(){
    popup.style.display = 'none';
})
