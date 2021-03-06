const button = document.querySelector("button");

// button.onclick = function() {

// };

const buttonClickHandler = (event) => {
  event.target.disabled = true;
  console.log(event);
};

const anotherButtonClickHandler = () => {
  console.log("THis was clicked");
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

btnFn = buttonClickHandler.bind(this);

// button.addEventListener("click", buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener("click", buttonClickHandler);
// }, 2000);

// button.removeEventListener();

// buttons.forEach((btn) => {
//   btn.addEventListener("mouseenter", buttonClickHandler);
// });

// window.addEventListener("scroll", (event) => {
//   console.log(event);
// });

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector("div");

div.addEventListener(
  "click",
  (event) => {
    console.log("Clicked Div");
    console.log(event);
  },
  true //3rd argument for capture phase. false for bubbling
);

button.addEventListener("click", function (event) {
  event.stopPropagation(); //div event listener doesnt work now. ancestor event listeners dont execute
  // event.stopImmediatePropagation(); //other button listeners doesnt execute
  console.log("Clicked Button");
  console.log(event);
  console.log(this);
});

const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

list.addEventListener("click", function (event) {
  // console.log(event.currentTarget);
  // event.target.classList.toggle("highlight");
  event.target.closest("li").classList.toggle("highlight"); //closest ancestor element is given
  form.submit(); //form.click();
  console.log(this); //this points to the current target
});
