for (var i = 0; i < document.querySelectorAll(".drum").length; i++){    
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        play(this.textContent);
        animateDrum(this.textContent);
    });
}
document.addEventListener("keypress", function (event){
        play(event.key);
        animateDrum(event.key);
    });
function play(letter){
    switch (letter) {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3"); 
            audio.play();
            break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3"); 
            audio.play();
            break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3"); 
            audio.play();
            break;
        case "j":
            var audio = new Audio("./sounds/snare.mp3"); 
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/crash.mp3"); 
            audio.play();
            break;
        case "l":
            var audio = new Audio("./sounds/kick-bass.mp3"); 
            audio.play();
            break;
    }
}
function animateDrum(letter){
    document.querySelector("." + letter).classList.add("pressed");
    setTimeout(() => {
        document.querySelector("." + letter).classList.remove("pressed");
    }, 100);
}