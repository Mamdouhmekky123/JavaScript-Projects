//start counter
let counter = 0;

//calling all buttons
const btns = document.querySelectorAll(".btn");

//calling span of value
const value = document.querySelector("#value");

//our behavior
btns.forEach((btn) => {
btn.addEventListener("click",(e) => {
  const styles = e.currentTarget.classList;

if(styles.contains("decrease")){
  counter--;
}else if(styles.contains("increase")){
counter++;
}else{
  counter=0;
}
if(counter>0){
  value.style.color="green";
}else if (counter<0){
  value.style.color="red";
}else{
  value.style.color="#222";
}


value.textContent=counter;
})
})