// the game state object
const gameState = {
  wins: 0,
  losses: 0,
  ties: 0,
};

// the computer's choice
function compChoice() {
  chooser = Math.floor(Math.random() * 3);
  if (chooser === 0) {
    return "rock";
  }
  else if (chooser === 1) {
    return "paper";
  }
  else{
    return "scissors";
  }
}

// // displays the computer's choice on the icons
function compShow(comp) {
  $("#" + comp).addClass("compWin");
  return comp;
}

// comparison function
function compare(player, comp) {
  if (player === "paper" && comp === "scissors"){
    return "loss";
  }
  else if (player === "paper" && comp === "rock") {
    return "win";
  }
  else if (player === "rock" && comp === "paper"){
    return "loss";
  }
  else if (player === "rock" && comp === "scissors") {
    return "win";
  }
  else if (player === "scissors" && comp === "rock"){
    return "loss";
  }
  else if (player === "scissors" && comp === "paper") {
    return "win";
  }
  else {
    return "tie";
  }
}

// update the game state
function resultsUpdate(result) {
  if(result === "win") {
    gameState.wins++;
  }
  else if (result === "loss") {
    gameState.losses++;
  }
  else{
    gameState.ties++;
  }
}

// this brings the game state info into the scoreboard
function scoreBoard(gameState) {
  $(".wins").text(gameState.wins);
  $(".losses").text(gameState.losses);
  $(".ties").text(gameState.ties);
}

// displays the players choice plus changes the text:
function displayHidden(player, comp) {
  if (player === "rock") {
    $("#throwplayer").attr("src", "http://res.cloudinary.com/drbu9pvxt/image/upload/v1489108227/RoShamBo/rock_xjk2zx.png");
    $("#throwplayer").removeClass("hidden");
    $("#playertext").text("You Chose:");
  }
  if (player === "paper") {
    $("#throwplayer").attr("src", "http://res.cloudinary.com/drbu9pvxt/image/upload/v1489108206/RoShamBo/paper_whv5np.png");
    $("#throwplayer").removeClass("hidden");
    $("#playertext").text("You Chose:");
  }
  if (player === "scissors") {
    $("#throwplayer").attr("src", "http://res.cloudinary.com/drbu9pvxt/image/upload/v1489108245/RoShamBo/scissors_nphybp.png");
    $("#throwplayer").removeClass("hidden");
    $("#playertext").text("You Chose:");
  }
  if (comp === "rock") {
    $("#throwcomp").attr("src", "http://res.cloudinary.com/drbu9pvxt/image/upload/v1489108227/RoShamBo/rock_xjk2zx.png");
    $("#throwcomp").removeClass("hidden");
    $("#comptext").text("Computer Chose:");
  }
  if (comp === "paper") {
    $("#throwcomp").attr("src", "http://res.cloudinary.com/drbu9pvxt/image/upload/v1489108206/RoShamBo/paper_whv5np.png");
    $("#throwcomp").removeClass("hidden");
    $("#comptext").text("Computer Chose:");
  }
  if (comp === "scissors") {
    $("#throwcomp").attr("src", "http://res.cloudinary.com/drbu9pvxt/image/upload/v1489108245/RoShamBo/scissors_nphybp.png");
    $("#throwcomp").removeClass("hidden");
    $("#comptext").text("Computer Chose:");
  }
}

// this resets the whole page by clicking on the reset button
function resetTurn() {
  $("#playertext").text("What'll it be?");
  $("#comptext").text(" ");
  $("#throwplayer").addClass("hidden");
  $("#throwcomp").addClass("hidden");
  $(".pick").switchClass("pick", "choice");
  $(".compWin").removeClass("compWin");
}

function percentCalc(gameState) {
  const percent = gameState.wins/(gameState.wins + gameState.losses + gameState.ties);
  return percent.toFixed(2);
}






// this will be the start of the action, the player choice, all functions above will called below here
// player input
$(".choice").click(function(event){
  $(event.target).switchClass("choice", "pick");
  const player = $(event.target).attr("id");
  const comp = compChoice();
  resultsUpdate(compare(player, comp));
  compShow(comp);
  scoreBoard(gameState);
  displayHidden(player, comp);
  $(".winPercent").text(percentCalc(gameState));
  window.setTimeout(resetTurn, 1500);
})

$("#resetbutton").click(function(event){
  $(".wins").text(0);
  $(".losses").text(0);
  $(".ties").text(0);
  $("#throwplayer").text("What'll it be?");
  $("#throwplayer").addClass("hidden");
  $("#throwcomp").addClass("hidden");
  $(".pick").switchClass("pick", "choice");
  $(".compWin").removeClass("compWin");
  gameState.ties = 0;
  gameState.wins = 0;
  gameState.losses = 0;
  $(".winPercent").text(0);
})
