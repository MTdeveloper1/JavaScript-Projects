let mainContainer = document.getElementById("mainContainer");

//Here are the players
var people = [
  {
    img: "dieguito.jpeg",
    name: "Diego Armando Maradona",
    job: "Football Player",
    description:
      "The biggest player in the history of argentine football, he did the hand of god and he gave Argentina two world cups.",
  },

  {
    img: "roman.jpeg",
    name: "Juan Román Riquelme",
    job: "Football player",
    description:
      "He made river dance, he scored two freekicks in one game, he is te king of stepping the ball and he gave Boca Juniors two intercontinental cups.",
  },

  {
    img: "carlitos.jpeg",
    name: "Carlos Tevez",
    job: "Football Player",
    description:
      'Known as "El apache", he made one of the most iconic moments of Boca, he scorerd an agonic goal to River Plate and he made "La gallinita".',
  },
];

//Position of the player we are looking for
var poeoplePosition = 0;

//Components of our player 
var img = `<img src="${people[poeoplePosition].img}"></img>`;
var name = `<p>${people[poeoplePosition].name}</p>`;
var job = `<p>${people[poeoplePosition].job}</p>`;
var description = `<p>${people[poeoplePosition].description}</p>`;

//Print the info in the screen
mainContainer.innerHTML =
  img +
  name +
  job +
  description +
  '<div class="buttonContainer"><button onClick="back()" id="back">Back</button> <button onClick="next()" id="next">Next</button></div>';

//Function that chanages the dom
function update() {
  img = `<img src="${people[poeoplePosition].img}"></img>`;
  name = `<p>${people[poeoplePosition].name}</p>`;
  job = `<p>${people[poeoplePosition].job}</p>`;
  description = `<p>${people[poeoplePosition].description}</p>`;
  mainContainer.innerHTML =
    img +
    name +
    job +
    description +
    '<div class="buttonContainer"><button onClick="back()" id="back">Back</button> <button onClick="next()" id="next">Next</button></div>';
}

//Function for btn next
function next() {
  poeoplePosition++;
  if (poeoplePosition == 3) {
    poeoplePosition = 0;
  }
  update();
}
//Function for btn back
function back() {
  poeoplePosition--;
  if (poeoplePosition == -1) {
    poeoplePosition = 2;
  }
  update();
}
