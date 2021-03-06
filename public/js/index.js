const city = document.querySelector('#info>h2');
const prev = document.querySelector('.swiper-button-prev');

function continuous() {
  document.querySelector('#visalia').style.display = 'flex';
  if (prev.classList.contains('swiper-button-disabled')) {
    city.innerText = 'Kingsburg';
    document.querySelector('.directions').href = 'https://goo.gl/maps/5hnbbdy6Ufz';
  } else {
    city.innerText = 'Visalia';
    document.querySelector('#visalia').style.display = 'none';
    document.querySelector('.directions').href = '';
  }
}
if (document.body.clientWidth < 650) {
  document.querySelector('.directions').innerText = 'SWIPE TO VIEW OTHER LOCATIONS';
}
setInterval(continuous, 500);
const now = new Date();
const weekday = new Array(7);
weekday[0] = 'Sunday';
weekday[1] = 'Monday';
weekday[2] = 'Tuesday';
weekday[3] = 'Wednesday';
weekday[4] = 'Thursday';
weekday[5] = 'Friday';
weekday[6] = 'Saturday';
const n = weekday[now.getDay()];
console.log(n);
const green = '#518702';
if (n === 'Sunday') {
  const hours = document.querySelectorAll('.button.hours');
  for (let i = 0; i < hours.length; i++) {
    hours[i].innerHTML = '10AM - 9PM';
  }
  const s = document.querySelectorAll('.s');
  for (let i = 0, max = s.length; i < max; i++) {
    s[i].style.color = green;
  }
} else if (n === 'Monday') {
  const hours = document.querySelectorAll('.button.hours');
  for (let i = 0; i < hours.length; i++) {
    hours[i].innerHTML = '11AM - 9PM';
  }
  const m = document.querySelectorAll('.m');
  for (let i = 0, max = m.length; i < max; i++) {
    m[i].style.color = green;
  }
} else if (n === 'Tuesday') {
  const hours = document.querySelectorAll('.button.hours');
  for (let i = 0; i < hours.length; i++) {
    hours[i].innerHTML = '11AM - 9PM';
  }
  const t = document.querySelectorAll('.t');
  for (let i = 0, max = t.length; i < max; i++) {
    t[i].style.color = green;
  }
} else if (n === 'Wednesday') {
  const hours = document.querySelectorAll('.button.hours');
  for (let i = 0; i < hours.length; i++) {
    hours[i].innerHTML = '11AM - 9PM';
  }
  const w = document.querySelectorAll('.w');
  for (let i = 0, max = w.length; i < max; i++) {
    w[i].style.color = green;
  }
} else if (n === 'Thursday') {
  const hours = document.querySelectorAll('.button.hours');
  for (let i = 0; i < hours.length; i++) {
    hours[i].innerHTML = '11AM - 9PM';
  }
  const tt = document.querySelectorAll('.tt');
  for (let i = 0, max = tt.length; i < max; i++) {
    tt[i].style.color = green;
  }
} else if (n === 'Friday') {
  const hours = document.querySelectorAll('.button.hours');
  for (let i = 0; i < hours.length; i++) {
    hours[i].innerHTML = '11AM - 10PM';
  }
  const f = document.querySelectorAll('.f');
  for (let i = 0, max = f.length; i < max; i++) {
    f[i].style.color = green;
  }
} else if (n === 'Saturday') {
  const hours = document.querySelectorAll('.button.hours');
  for (let i = 0; i < hours.length; i++) {
    hours[i].innerHTML = '10AM - 10PM';
  }
  const ss = document.querySelectorAll('.ss');
  for (let i = 0, max = ss.length; i < max; i++) {
    ss[i].style.color = green;
  }
}

document.querySelector('.gtdr').onclick = function () {
  document.querySelector('modalback').classList.add('show');
};

document.querySelector('.fa-times-circle').onclick = function () {
  document.querySelector('#modalback').classList.remove('show');
};
