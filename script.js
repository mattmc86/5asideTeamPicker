var selectEl = document.querySelector(".select");
var showPlayerEl = document.querySelector(".showPlayer");
var submitEl = document.querySelector(".submit");
var playerEl = document.querySelector(".player");
var generateEl = document.querySelector(".generate");
var teamsPage = "./teams.html";
var teamOneEl = document.querySelector(".teamOne");
var removePlayer = document.querySelector(".undo");
var resetEl = document.querySelector(".reset");
//var removePlayer = document.createElement("button");
var newplayerList = [];
var showTeamOneEl = document.querySelector(".showTeamOne");
var showTeamTwoEl = document.querySelector(".showTeamTwo");

var teamOne = [];
var teamTwo = [];

//removePlayer.textContent = "Remove";
//playerList.append(removePlayer);

submitEl.addEventListener("click", function displayPlayers() {
  // const addPlayer = document.getElementById("playerNameForm");

  var playerName = playerEl.value.trim();
  var playerList = document.createElement("li");
  playerList.append(playerName);
  showPlayerEl.append(playerList);
  localStorage.setItem("playerName", playerName);
  newplayerList.push(newplayerList.length + 1 + " " + playerName);
  randomPlayers = newplayerList.sort((a, b) => 0.5 - Math.random());

  // var nameFormEl = document.querySelector(".nameForm");
  // nameFormEl =document.reset();
  //playerName.textContent= "";
  //var blankPlayer = "";
  //playerEl.append(blankPlayer);
  //playerEl.textContent = "";
  // playerEl.innerHTML="";

  // function undoPlayer() {
  //   //console.log("player to remove is " + playerName);
  //   playerList.innerHTML = "";
  //   //playerName.innerHTML = "";
  //   newplayerList.shift();
  //   //remove from newArray
  // }

  // removePlayer.addEventListener("click", undoPlayer);

  function clearForm() {
    playerEl.value = "";
    // playerEl.textContent = "";
    // playerEl.innerHTML = "";
    // playerName.textContent = "";
    // playerName.innerHTML = "";
  }

  clearForm();
});

function teamsNew() {
  teamOne = randomPlayers.slice(-5);
  //teamOne = JSON.stringify(teamOne);
  //console.log("Team One is " + teamOne);
  teamTwo = randomPlayers.slice(0, 5);
  //console.log("Team Two is " + teamTwo);
  showTeamOneEl.append(teamOne);
  showTeamTwoEl.append(teamTwo);
  getApi();
}

generateEl.addEventListener("click", teamsNew);

function getApi() {
  var requestForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Gateshead&units=metric&appid=51b8740ba38e6f14ed03de9b608c5b7a`;
  fetch(requestForecastUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //console.log(data);

      // Create elements for a card
      var dayOne = document.querySelector(".weatherCard");
      var col = document.createElement("div");
      var card = document.createElement("div");
      var cardBody = document.createElement("div");
      var cardTitle = document.createElement("h5");
      var weatherIcon = document.createElement("img");
      var tempEl = document.createElement("p");
      var windEl = document.createElement("p");
      var humidityEl = document.createElement("p");

      col.append(card);
      card.append(cardBody);
      cardBody.append(cardTitle, weatherIcon, tempEl, windEl, humidityEl);

      col.setAttribute("class", "col-md");
      col.classList.add("five-day-card");
      card.setAttribute("class", "card bg-primary h-100 text-white");
      cardBody.setAttribute("class", "card-body p-2");
      cardTitle.setAttribute("class", "card-title");
      tempEl.setAttribute("class", "card-text");
      windEl.setAttribute("class", "card-text");
      humidityEl.setAttribute("class", "card-text");

      // Add content to elements
      //cardTitle.textContent = dayOneFull;

      weatherIcon.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`
      );
      //weatherIcon.setAttribute('alt', iconDescription);
      tempEl.textContent = `Temp: ${data.list[0].main.temp} °C`;
      windEl.textContent = `Wind: ${data.list[0].wind.speed} MPH`;
      humidityEl.textContent = `Humidity: ${data.list[0].main.humidity} %`;

      dayOne.append(col);
    });
}

function resetForm() {
  showPlayerEl.innerHTML = "";
  showTeamOneEl.innerHTML = "";
  showTeamTwoEl.innerHTML = "";
}

resetEl.addEventListener("click", resetForm);
