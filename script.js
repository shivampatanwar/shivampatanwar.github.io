

if (document.querySelector('#random-bg') != null) {
  let btn = document.querySelector('#random-bg');
  btn.onclick = () => {
    let min = 1000000;
    let max = 10000000;
    let color = '#' + (Math.floor(Math.random() * (max - min) + min)).toString(16);
    document.body.style.backgroundColor = color;
  }
}

if (document.querySelector('#random') != null) {
  let btn = document.querySelector('#random');
  btn.onclick = () => {
    let min = 100000;
    let max = 1000000;
    let random = Math.floor(Math.random() * (max - min) + min);
    console.log(random);
  }
}


function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { elmnt.innerHTML = this.responseText; }
          if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}
includeHTML();