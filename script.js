let screen = document.querySelector('.screen')
    , slider = document.querySelector('.resolution')
    , pixelPerSide = 16;

let screenSize = document.querySelector('.screen').offsetWidth;

createScreen();

slider.oninput = () => {
    pixelPerSide = slider.value;
    document.querySelector('.options p').textContent = pixelPerSide;
    slider.onmouseup = () => {
        clearScreen(); createScreen(); allPixels = document.querySelectorAll('.pixel');
    }
}

function createScreen() {



    for (i = 0; i < (pixelPerSide ** 2); i++) {
        let pixel = document.createElement('div')
            , pixelSize = screenSize / pixelPerSide;


        pixel.classList.add('pixel');
        pixel.setAttribute('style', `width:${pixelSize}px; height:${pixelSize}px;`);
        screen.appendChild(pixel);

    }

    console.log('createScreen');

}

function clearScreen() {

    while (screen.firstChild) {
        screen.removeChild(screen.firstChild);
    }

    console.log('clearScreen');

}



let allPixels = document.querySelectorAll('.pixel');
let checkState = 0;
let addColor = function (e) { this.style.backgroundColor = 'black'; }

window.addEventListener('mousedown', () => { checkState = 0; allPixels.forEach((pixel) => checkHover(pixel)) }, true);
window.addEventListener('mouseup', () => { checkState = 1; allPixels.forEach((pixel) => checkHover(pixel)) }, true);



function checkHover(pixel) {


    switch (checkState) {
        case 0: pixel.addEventListener('mouseover', addColor);
            break;

        case 1: pixel.removeEventListener('mouseover', addColor);
            break;
    }

} 

