// console.log(document.getElementById("PageSubTitle"));

// console.log(document.getElementsByClassName("title")[0]);

const PageTitle = document.querySelector(".title");

console.log(PageTitle);

PageTitle.innerText = "Page Title";
PageTitle.style.color = "black";
PageTitle.style.fontSize = "30px";
PageTitle.style.backgroundColor = "brown";
PageTitle.classList.add("title2");
PageTitle.classList.contains("title");
// PageTitle.setAttribute("class", "title2");

// console.log(PageTitle.classList.contains("title"));

// const button = document.createElement("button");
// button.innerText = "Button";
const buttonParent = document.querySelector("#demo");
// buttonParent.append(button);

const buttons = ["Success", "Error", "Warning"];

const buttonElements = buttons.map((button) => {
  const element = document.createElement("button");
  element.innerText = button;
  return element;
});

// console.log(buttonElements);

buttonElements.forEach((element) => {
  buttonParent.append(element);
});

const buttonsDetailed = [
  {
    value: "Success",
    color: "green"
  },
  {
    value: "Error",
    color: "red"
  },
  {
    value: "Warning",
    color: "yellow"
  }
];

buttonsDetailed.forEach((element) => {
  const button = document.createElement("button");
  button.innerText = element.value;
  button.style.backgroundColor = element.color;
  button.classList.add("myButton");
  buttonParent.append(button);
});

const everyButton = Array.from(document.querySelectorAll("button"));

console.log(everyButton);

const content = "test";
const filteredButtons = everyButton.filter((element) => {
  return element.textContent.includes(content);
  //   return element.textContent === content;
});

console.log(filteredButtons);

filteredButtons.forEach((element) => {
  element.remove();
});
