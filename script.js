

if (document.querySelector('#random-bg') != null) {
  let btn = document.querySelector('#random-bg');
  btn.onclick = () => {
    let min=1000000;
    let max = 10000000;
    let color = '#' + (Math.floor(Math.random()*(max-min)+min)).toString(16);
    console.log(color)
    document.body.style.backgroundColor = color;
  }
}

if (document.querySelector('#random') != null) {
  let btn = document.querySelector('#random');
  btn.onclick = () => {
    // let random = 100000 + Math.floor(Math.random() * 1000000);
    let min=100000;
    let max = 1000000;
    let random = Math.floor(Math.random()*(max-min)+min);
    console.log(random);
    

  }
}
