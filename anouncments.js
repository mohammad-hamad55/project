const humbToggler = document.querySelector("header .humb");
const closeListToggler = document.querySelector("header .close");
humbToggler.addEventListener("click", () => {
  humbToggler.classList.add("hidden");
  closeListToggler.classList.remove("hidden");
  document.querySelector("header .menu ul").classList.toggle("active");
});
closeListToggler.addEventListener("click", () => {
  closeListToggler.classList.add("hidden");
  humbToggler.classList.remove("hidden");
  document.querySelector("header .menu ul").classList.toggle("active");
});
const readButtons = document.getElementsByClassName("read-button");
// const showModal=()=>{

// }
const readMoreHandler = () => {
  // const tempElContent = document.getElementById("temp").content;
  // const tempEl = document.importNode(tempElContent, true);
  // const backGround = tempEl.querySelector("div");
  // const modal = tempEl.querySelectorAll("div")[1];
  // document.body.insertAdjacentElement("afterbegin", backGround);
  // backGround.appendChild(modal);
  window.open('./anouncement solo.html','_self');
};
for (const button of readButtons) {
  button.addEventListener("click", readMoreHandler);
}

// document.
