let screen = document.querySelector('.screen')
    , pixelPerSide = 16
    , checkMouseDown = 0;

let screenSize = document.querySelector('.screen').offsetWidth;

createScreen();
createSlider();

window.onmousedown = () => { checkMouseDown = 1; };
window.onmouseup = () => { checkMouseDown = 0; };

document.querySelectorAll('.slider-peg').forEach((peg) => {
    peg.addEventListener('mouseover', (e) => {

        if (checkMouseDown) {
            let pegNumber = +e.target.classList["1"].substr(1);

            for (i = 16; i <= pegNumber; i++) {
                document.querySelector(`.slider-peg.x${i}`).style.backgroundColor = "green";
            }

            for (i = pegNumber + 1; i <= 24; i++) {

                document.querySelector(`.slider-peg.x${i}`).removeAttribute('style');
            }

            pixelPerSide = pegNumber;

            clearScreen();
            createScreen();

        }
    });
})

function createSlider() {

    for (i = 16; i <= 24; i++) {
        let peg = document.createElement('div');
        peg.classList.add('slider-peg');
        peg.classList.add(`x${i}`);
        document.querySelector('.options').appendChild(peg);
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

/*

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

*/