
// let btn = document.querySelector('button');
// console.log(btn)
// btn.onclick=()=>{
//   let color = '#' + (1000000 + Math.floor(Math.random()*1000000)).toString(15);
//   document.body.style.backgroundColor= color;

// }

console.log(document)

if (document.querySelector('#random-bg') != null) {
  let btn = document.querySelector('#random-bg');
  console.log(btn)
  btn.onclick = () => {
    let color = '#' + (1000000 + Math.floor(Math.random() * 1000000)).toString(15);
    document.body.style.backgroundColor = color;

  }
}
