const readButtons = document.getElementsByClassName("read-button");
// const showModal=()=>{

// }
const readMoreHandler = () => {
  const tempElContent = document.getElementById("temp").content;
  const tempEl = document.importNode(tempElContent, true);
  const backGround = tempEl.querySelector("div");
  const modal = tempEl.querySelectorAll("div")[1];
  document.body.insertAdjacentElement("afterbegin", backGround);
  backGround.appendChild(modal);
};
for (const button of readButtons) {
  button.addEventListener("click", readMoreHandler);
}

// document.