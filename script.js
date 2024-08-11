let h1 = document.querySelector('h1');
h1.style.color= 'blue';

let btn = document.querySelector('button');
btn.onclick=()=>{
  let color = '#' + (1000000 + Math.floor(Math.random()*1000000)).toString(15);
  document.body.style.backgroundColor= color;
}
