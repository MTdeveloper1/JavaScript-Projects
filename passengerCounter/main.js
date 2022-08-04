var days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurday",
  "Friday",
  "Saturday",
  "Sunday",
];

let day = document.getElementById("day");
let counterDOM = document.getElementById("counter");
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let save = document.getElementById("save");
let savingContainer = document.getElementById("savingContainer");
let body = document.getElementById("body");

//Variable for the weather
var random = Math.floor(Math.random() * (2 - 0 + 1) + 0);
//Counter of passengers
var counter = 0;
//Postion that changes the day
var position = 0;

switch (random) {
  case 0:
    body.classList.add("sunny");
    break;
  case 1:
    body.classList.add("rainy");
    counterDOM.classList.add("white");
    break;
  case 2:
    body.classList.add("snowy");
    counterDOM.classList.add("white");
    break;
}

counterDOM.innerHTML = counter;
day.innerHTML = days[0];

function increaseCount() {
  counter++;
  counterDOM.innerHTML = counter;
}

function decreaseCount() {
  counter--;
  if (counter < 0) {
    counter++;
  }
  counterDOM.innerHTML = counter;
}



function saveCount() {
  random = Math.floor(Math.random() * (2 - 0 + 1) + 0);

  switch (random) {
    case 0:
      body.classList.add("sunny");
      body.classList.remove("snowy");
      body.classList.remove("rainy");
      break;
    case 1:
      body.classList.add("rainy");
      body.classList.remove("snowy");
      body.classList.remove("sunny");
      counterDOM.classList.add("white");
      break;
    case 2:
      body.classList.add("snowy");
      body.classList.remove("sunny");
      body.classList.remove("rainy");
      counterDOM.classList.add("white");
      break;
  }
  savingContainer.innerHTML += `<div class="finalContainer"><p id="dayMark">${days[position]}:</p> <p>${counter}</p></div>`;
  position++;
    day.innerHTML=days[position];

    counter=0;
    counterDOM.innerHTML = counter;

     if(position == 7) {
      save.innerText="Reset"
     } else if(position == 8) {
      position=0;
      day.innerHTML=days[position];
      savingContainer.innerHTML = ``;
      save.innerText = "Save"
     }
}