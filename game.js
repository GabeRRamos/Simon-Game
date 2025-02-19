
var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];
var level = 0;
var started = false;

function nextSequence() {

    userClickedPattern = [];
    $("h1").text("Level " + level++);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

$(document).keypress(function(event){
    if (started == false){
        if (event.key == 'a'){
            nextSequence();
            started = true; 
        }
    }
})

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }
    else{
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}

$(".btn").click(function(){
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
})

function playSound(color){
    var audio = new Audio("./sounds/" + color + ".mp3");
    audio.play();
}

function animatePress(currentColor){
    var activeBtn = $("#" + currentColor);
    activeBtn.addClass("pressed");
    setTimeout(function(){
        activeBtn.removeClass("pressed")
    }, 100)
}
