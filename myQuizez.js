const upButton = document
  .getElementsByClassName("controls")[0]
  .querySelectorAll("button")[0];
const downButton = document
  .getElementsByClassName("controls")[0]
  .querySelectorAll("button")[1];
const myQustin = document.getElementsByClassName("single-qustion");
const myList = [...myQustin];
let myCounter = 0;
const mySelectQus = (index) => {
  myList.forEach((el, ind) => {
    if (ind === index) {
      el.classList.add("apper");
      return;
    }
    el.classList.remove("apper");
  });
};
mySelectQus(myCounter);

const dwonButtonHandler = () => {
  if (myCounter === 4) {
    myList[myCounter].classList.add("blink");
    setTimeout(() => {
      mySelectQus(0);
      myList[4].classList.remove("blink");
      myCounter = 0;
    }, 505);
  } else {
    myList[myCounter].classList.add("blink");
    setTimeout(() => {
      mySelectQus(myCounter + 1);

      myList[myCounter].classList.remove("blink");

      myCounter++;
    }, 505);
  }
};

const upButtonHandler = () => {
   if (myCounter === 0) {
      myList[myCounter].classList.add("blink");
      setTimeout(() => {
        mySelectQus(4);
        myList[0].classList.remove("blink");
        myCounter = 4;
      }, 505);
    } else {
      myList[myCounter].classList.add("blink");
      setTimeout(() => {
        mySelectQus(myCounter - 1);
  
        myList[myCounter].classList.remove("blink");
  
        myCounter--;
      }, 505);
    }
};

downButton.addEventListener("click", dwonButtonHandler);
upButton.addEventListener("click", upButtonHandler);
