document.addEventListener("keydown", (event) => {
    let key = event.key
    animateKey(key)
    playSound(key)
})

function animateKey(key){ 
    addClassToElement("key_"+key,'press_effect');
}

function addClassToElement(id,classname){
    document.getElementById(id)?.classList.add(classname)
    setTimeout(() => {
        document.getElementById(id)?.classList.remove(classname)
    }, 100);
}

function playSound(key){
    let audio ;
    switch (key) {
        case "a":
            audio= new Audio("./sounds/boom.wav");
            break;
        case "s":
            audio= new Audio("./sounds/clap.wav");
            break;
        case "d":
            audio= new Audio("./sounds/hihat.wav");
            break;
        case "f":
            audio= new Audio("./sounds/kick.wav");
            break;
        case "g":
            audio= new Audio("./sounds/openhat.wav");
            break;
        case "h":
            audio= new Audio("./sounds/ride.wav");
            break;
        case "j":
            audio= new Audio("./sounds/snare.wav");
            break;
        case "k":
            audio= new Audio("./sounds/tom.wav");
            break;
        case "l":
            audio= new Audio("./sounds/tink.wav");
            break;
        default:
            break;

    }
    audio?.play()
}