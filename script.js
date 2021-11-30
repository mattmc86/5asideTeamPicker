var selectEl = document.querySelector(".select");
var showPlayerEl = document.querySelector(".showPlayer");
var submitEl = document.querySelector(".submit");
var playerEl = document.querySelector(".player");
var generateEl = document.querySelector(".generate");
var teamsPage = "./teams.html";
var teamOneEl = document.querySelector(".teamOne");
var removePlayer = document.querySelector(".undo");
//var removePlayer = document.createElement("button");
var newplayerList = [];
var showTeamOneEl = document.querySelector(".showTeamOne");
var showTeamTwoEl = document.querySelector(".showTeamTwo");

var teamOne = [];
var teamTwo = [];


//removePlayer.textContent = "Remove";
//playerList.append(removePlayer);

submitEl.addEventListener("click", function displayPlayers() {
 //var event = event.preventDefault();
  var playerName = playerEl.value.trim();
  //console.log("player added  " + playerName);
  var playerList = document.createElement("li");
  playerList.append(playerName);

  showPlayerEl.append(playerList);
  localStorage.setItem("playerName", playerName);

  newplayerList.push((newplayerList.length + 1) + " " + playerName);



  //console.log("player array is " + newplayerList);
  randomPlayers= newplayerList.sort((a,b)=>0.5 - Math.random());
  console.log("random list is "+ randomPlayers);
  

  //document.getElementById("playerNameForm").reset();
  //playerName.textContent= "";
  //var blankPlayer = "";
  //playerEl.append(blankPlayer);
  //playerEl.textContent = "";
  // playerEl.innerHTML="";

 
  function undoPlayer() {
    var event = event.preventDefault();
    console.log("player to remove is " + playerName);
    //playerList.innerHTML = "";
    playerName.innerHTML = "";
    newplayerList.shift();
    //remove from newArray
  }
  removePlayer.addEventListener("click", undoPlayer);


});


function teamsNew(){
    teamOne = randomPlayers.slice(-5)
    //teamOne = JSON.stringify(teamOne);
    console.log("Team One is " + teamOne);
    teamTwo = randomPlayers.slice(0,5);
    console.log("Team Two is " + teamTwo);
    showTeamOneEl.append(teamOne);
    showTeamTwoEl.append(teamTwo);

    
}
generateEl.addEventListener("click", teamsNew);


////code for randomising array

// var players = ["Matty", "Kev", "Euan", "Neasham","Lenny","Nella","Snowball","Watson","Stacka","Jacky"];
// console.log("players in order " + players)
// let randomPlayers= players.sort((a,b)=>0.5 - Math.random());
// console.log("random "+ randomPlayers);



// function chunk (newPlayers, newTeam) {  
//     const chunks = []
//     newPlayers = [].concat(...newPlayers)
  
//     while (newPlayers.length) {
//       chunks.push(
//         newPlayers.splice(0, newTeam)
//       )
//     }
  
//     return chunks
//   }
  
//   //console.log(chunk);
//   // Example
  
//   var newPlayers = newplayerList
  
  //chunk(newPlayers, 2)  

//   function generateTeams() {
//     document.location = teamsPage;
//     chunk(newPlayers, 2);
//   }

 // generateEl.addEventListener("click", generateTeams);