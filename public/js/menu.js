const burger = document.querySelector("#hamburger");
burger.onclick = function(){
  document.querySelector("#links").classList.toggle("open");
};

if (document.querySelector("#links").classList.contains("open")){
  burger.style.right = "50%";
}
