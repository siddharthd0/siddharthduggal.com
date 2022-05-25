var $ = function(id) {
  return document.getElementById(id);
};
var inc = 0;
var out = 0;
var str = 'Siddharth';
var chars = 'DEVELOPERDEVELOPER';
var t;

var anim = function() {
  inc++;
  if (inc % 7 === 0 && out < str.length) {
    $('anim').appendChild(document.createTextNode(str[out]));
    out++;
  } else if (out >= str.length) {
    $('shuffle').innerHTML = '';
    removeInterval(t);
  }
  $('shuffle').innerHTML =
    chars[Math.floor(Math.random() * chars.length)];
};
t = setInterval(anim, 40);
$('anim').innerHTML = '';

//Do it again
function reload() {
  window.location.href = window.location.href;
}
document.getElementById('btn').onclick = reload;


window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Success!");
    })
  });
});

