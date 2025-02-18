$(".btn").click(function(){
    makeSound(this.id);
})

function nextSequence(){
    
}

function makeSound(key){
    switch (key) {
        case "green":
            var audio = new Audio("./sounds/green.mp3");
            audio.play();
            break;
        case "red":
            var audio = new Audio("./sounds/red.mp3");
            audio.play();
            break;
        case "blue":
            var audio = new Audio("./sounds/blue.mp3");
            audio.play();
            break;
        case "yellow":
            var audio = new Audio("./sounds/yellow.mp3");
            audio.play();

            
        default:
            break;
    };
}