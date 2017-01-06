var numberOfGamesToWin = 5;
var playerScores = [0, 0];
var gameComplete = false;

document.querySelector("#player_one_won").addEventListener("click", function() { incrementScore(1) })
document.querySelector("#player_two_won").addEventListener("click", function() { incrementScore(2) })

function incrementScore(playerNumber) {
    if (gameComplete) return;

    playerScores[playerNumber - 1]++;
    document.querySelector("#player_one_score").textContent = playerScores[0];
    document.querySelector("#player_two_score").textContent = playerScores[1];

    gameComplete = playerScores[playerNumber - 1] >= numberOfGamesToWin;
}

document.querySelector("#reset").addEventListener("click", function() {
	numberOfGamesToWin = document.querySelector("#number_of_games_to_win_input").value;
	var playerScores = [0, 0];
	var gameComplete = false;
	document.querySelector("#player_one_score").textContent = playerScores[0];
    document.querySelector("#player_two_score").textContent = playerScores[1];
	document.querySelector("#number_of_games_to_win").textContent = numberOfGamesToWin;
})
