const colors = ["green","violet","yellow","pink", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");


btn.addEventListener("click",() => {
  const randColor = getRandomNumber();

  document.body.style.backgroundColor=colors[randColor];
  color.textContent=colors[randColor];
})

function getRandomNumber(){
  return Math.floor(Math.random()*colors.length);
}