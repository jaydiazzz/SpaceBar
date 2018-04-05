const city = document.querySelector('#info>h2');
var   prev = document.querySelector(".swiper-button-prev"),
      next = document.querySelector(".swiper-button-next");
function continuous() {
  if(prev.classList.contains("swiper-button-disabled")){
    city.innerText = "Kingsburg";
    document.querySelector("#visalia").style.display = "flex";
    document.querySelector(".directions").href = "https://goo.gl/maps/5hnbbdy6Ufz";
  }
  else{
    city.innerText = "Visalia";
    document.querySelector("#visalia").style.display = "none";
    document.querySelector(".directions").href = "";
  }
};
setInterval(continuous,500);
const now   = new Date();
var weekday = new Array(7);
weekday[0]  =  "Sunday";
weekday[1]  = "Monday";
weekday[2]  = "Tuesday";
weekday[3]  = "Wednesday";
weekday[4]  = "Thursday";
weekday[5]  = "Friday";
weekday[6]  = "Saturday";
var n       = weekday[now.getDay()];
console.log(n);
var green = "#518702";
if(n === "Sunday"){
  document.querySelector(".hours").innerHTML = "10AM - 9PM";
  var s = document.querySelectorAll(".s");
  for (var i = 0, max = s.length; i < max; i++) {
      s[i].style.color = green;
  }
}
else if(n === "Monday"){
  document.querySelector(".hours").innerHTML = "11AM - 9PM";
  var m = document.querySelectorAll(".m");
  for (var i = 0, max = m.length; i < max; i++) {
      m[i].style.color = green;
  }
}
else if(n === "Tuesday"){
  document.querySelector(".hours").innerHTML = "11AM - 9PM";
  var t = document.querySelectorAll(".t");
  for (var i = 0, max = t.length; i < max; i++) {
      t[i].style.color = green;
  }
}
else if(n === "Wednesday"){
  document.querySelector(".hours").innerHTML = "11AM - 9PM";
  var w = document.querySelectorAll(".w");
  for (var i = 0, max = w.length; i < max; i++) {
      w[i].style.color = green;
  }
}
else if(n === "Thursday"){
  document.querySelector(".hours").innerHTML = "11AM - 9PM";
  var tt = document.querySelectorAll(".tt");
  for (var i = 0, max = tt.length; i < max; i++) {
      tt[i].style.color = green;
  }
}
else if(n === "Friday"){
  document.querySelector(".hours").innerHTML = "11AM - 10PM";
  var f = document.querySelectorAll(".f");
  for (var i = 0, max = f.length; i < max; i++) {
      f[i].style.color = green;
  }
}
else if(n === "Saturday"){
  document.querySelector(".hours").innerHTML = "10AM - 10PM";
  var ss = document.querySelectorAll(".ss");
  for (var i = 0, max = ss.length; i < max; i++) {
      ss[i].style.color = green;
  }
}
