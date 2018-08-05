//Start the Game with the document ready function
$(document).ready(function() {

    //create the random number at the start of the game. Between 19-120.
    //use variable random with the intigers of 19-120
    //make variable name of randomGen
var Random=Math.floor(Math.random()*101+19);
//MAKING SURE THE random number shows up in the HTML. Linking Random number to the result of randomGen.
$("#randomNumber").text(Random);
//Now that I've created the numbers for the random target I assign variables for the Jewels from between 1-12 for each jewel.
var num1=Math.floor(Math.random()*11+1); //Blue
var num2=Math.floor(Math.random()*11+1); //Green
var num3=Math.floor(Math.random()*11+1); //Red
var num4=Math.floor(Math.random()*11+1); //Yellow
//Now I assign variables for the remaining changable assets to my game. I'll declare user total, wins, and losses and use simple names.
//I'll also be sure to set all of them to 0.
var wins= 0;
var losses= 0;
var userTotal = 0;
//Assign the variables to the HTML
$("#numberWins").text(wins);
$("#numberLosses").text(losses);
$("#totalScore").text(userTotal);

//Before I want to induce the wrath of scope and functions I'd like to create a reset function for my game.
//Logic: respawn the random target number between 19-120
//Logic: HTML show the random target numbers result 
//Logic Set the four jewel total scores per click.
//Logic reset user total to 0,
//Logic set the total score variable the same as the user total variable, 0.
function reset() {
    Random=Math.floor(Math.random()*101+19);
    $("#randomNumber").text(Random);
    num1 = Math.floor(Math.random()*11+1);
    num2 = Math.floor(Math.random()*11+1);
    num3 = Math.floor(Math.random()*11+1);
    num4 = Math.floor(Math.random()*11+1);
    userTotal = 0;
    $("#totalScore").text(userTotal);
}
//Function reset is used in all the following variables for winning and losing.
//Function for winning and losing.
function winner() {
    wins++;
    $("#numberWins").text(wins);
    reset();
}
function loser() {
    losses++;
    $("#numberLosses").text(losses);
    reset();
}

//then bring in functions 
//Creating on click functions!
//BLUE GEM
$("#one").on ("click", function() {
    userTotal = userTotal + num1;
    $("#totalScore").text(userTotal);
    //then bring in functions 
    if (userTotal === Random) {
        winner();
    }
    else if (userTotal > Random) {
        loser();
    }
});
//GREEN GEM
$("#two").on ("click", function(){
    userTotal = userTotal + num2;
    $("#totalScore").text(userTotal);
    if (userTotal === Random) {
        winner();
    }
    else if (userTotal > Random){
        loser();
    }
});
//RED GEM
$("#three").on ("click", function() {
    userTotal = userTotal + num3;
    $("#totalScore").text(userTotal);
    if (userTotal === Random) {
        winner();
    }
    else if (userTotal > Random) {
        loser();
    }
});
//YELLOW
$("#four").on ("click", function() {
    userTotal = userTotal + num4;
    $("#totalScore").text(userTotal);
    if (userTotal === Random) {
        winner();
    }
    else if (userTotal > Random) {
        loser();
    }
    });
}); //This is the end command for document ready function
