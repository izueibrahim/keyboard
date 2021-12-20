var audioOne = document.getElementById("audioOne");
var audioTwo = document.getElementById("audioTwo");
var audioThree = document.getElementById("audioThree");
var audioFour = document.getElementById("audioFour");
var audioFive = document.getElementById("audioFive");
var audioSix = document.getElementById("audioSix");
var audioSeven = document.getElementById("audioSeven");
var audioEight = document.getElementById("audioEight");

// var key = document.getElementsByClassName("key");

// var keys = [];
// var sound = [];
// 
// sound [0] = new Howl ({
    // src: ["audio/1.mp3"],
// });
// 
// sound [1] = new Howl ({
    // src: ["audio/2.mp3"],
// });
// 
// sound [2] = new Howl ({
    // src: ["audio/3.mp3"],
// });
// 
// sound [3] = new Howl ({
    // src: ["audio/4.mp3"],
// });


document.addEventListener("keydown", keyPressed);
document.addEventListener("keyup", keyReleased);

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);


function keyPressed(evt) {
    console.log(evt.keyCode);
    if(evt.keyCode == 65) {
        audioOne.play();
        var key = document.getElementsByClassName("key");
        console.log("key is...", key);
        key[0].style.background = "red";
    }

    if (evt.keyCode == 83) {
        audioTwo.play();
        var key = document.getElementsByClassName("key");
        console.log("key is...", key);
        key[1].style.background = "red";
    }

    if (evt.keyCode == 68) {
        audioThree.play();
        var key = document.getElementsByClassName("key");
        console.log("key is...", key);
        key[2].style.background = "red";
    }

    if (evt.keyCode == 70) {
        audioFour.play();
        var key = document.getElementsByClassName("key");
        console.log("key is...", key);
        key[3].style.background = "red";
    }

    if (evt.keyCode == 71) {
        audioFive.play();
        var key = document.getElementsByClassName("key");
        console.log("key is...", key);
        key[4].style.background = "red";
    }

    if (evt.keyCode == 72) {
        audioSix.play();
        var key = document.getElementsByClassName("key");
        console.log("key is...", key);
        key[5].style.background = "red";
    }

    if (evt.keyCode == 74) {
        audioSeven.play();
        var key = document.getElementsByClassName("key");
        console.log("key is...", key);
        key[6].style.background = "red";
    }

    if (evt.keyCode == 75) {
        audioEight.play();
        var key = document.getElementsByClassName("key");
        console.log("key is...", key);
        key[7].style.background = "red";
    }

}

function keyReleased(evt) {
    if (evt.keyCode == 65) {
        var key = document.getElementsByClassName("key");
        key[0].style.backgroundColor = "white";
    }

    if (evt.keyCode == 83) {
        var key = document.getElementsByClassName("key");
        key[1].style.backgroundColor = "white";
    }

    if (evt.keyCode == 68) {
        var key = document.getElementsByClassName("key");
        key[2].style.backgroundColor = "white";
    }

    if (evt.keyCode == 70) {
        var key = document.getElementsByClassName("key");
        key[3].style.backgroundColor = "white";
    }

    if (evt.keyCode == 71) {
        var key = document.getElementsByClassName("key");
        key[4].style.backgroundColor = "white";
    }

    if (evt.keyCode == 72) {
        var key = document.getElementsByClassName("key");
        key[5].style.backgroundColor = "white";
    }

    if (evt.keyCode == 74) {
        var key = document.getElementsByClassName("key");
        key[6].style.backgroundColor = "white";
    }

    if (evt.keyCode == 75) {
        var key = document.getElementsByClassName("key");
        key[7].style.backgroundColor = "white";
    }
}

// function keyDown(evt) {
    // key[evt.keyCode] = true;
// 
    // if(keys[65]) {
        // sound[0].play();
    // }
// 
    // if(keys[83]) {
        // sound[1].play();
    // }
// 
    // if(keys[68]) {
        // sound[2].play();
    // }
// 
    // if(keys[70]) {
        // sound[3].play();
    // }
// 
// }
// 
// 
// function keyUp(evt) {
    // delete keys[evt.keyCode];
// 
    // if (evt.keyCode == 65) {
        // key[0].style.backgroundColor = "white";
    // }
// 
    // if (evt.keyCode == 83) {
        // key[1].style.backgroundColor = "white";
    // }
// 
    // if (evt.keyCode == 68) {
        // key[2].style.backgroundColor = "white";
    // }
// 
    // if (evt.keyCode == 70) {
        // key[3].style.backgroundColor = "white";
    // }
// 
    // keys[evt.keyCode];
// }