let screen = document.querySelector('.screen')
    , minResolution = 16
    , maxResolution = 24
    , pixelPerSide = 16
    , checkMouseDown = 0;

let screenSize = document.querySelector('.screen').offsetWidth;
let allPixels = document.querySelectorAll('.pixel');
let checkState = 0;
let addColor = function (e) {
    if (checkMouseDown) {
        this.style.backgroundColor = 'black';
    }
}


createScreen();
createSlider();

allPixels.forEach((pixel) => pixel.addEventListener('mouseover', addColor));

window.onmousedown = () => { checkMouseDown = 1; };
window.onmouseup = () => { checkMouseDown = 0; };

document.querySelectorAll('.slider-peg').forEach((peg) => {
    peg.addEventListener('mouseover', (e) => {

        if (checkMouseDown) {
            let pegNumber = +e.target.classList["1"].substr(1);
            console.log('works');

            for (i = minResolution; i <= maxResolution; i++) {
                let currentPeg = document.querySelector(`.slider-peg.x${i}`);

                if (currentPeg.firstChild) {
                    currentPeg.removeChild(currentPeg.firstChild);
                }
            }


            for (i = minResolution; i <= pegNumber; i++) {
                document.querySelector(`.slider-peg.x${i}`).style.backgroundColor = "green";
            }

            for (i = pegNumber + 1; i <= maxResolution; i++) {

                document.querySelector(`.slider-peg.x${i}`).removeAttribute('style');
            }

            let cursor = document.createElement('div');
            cursor.classList.add('slider-cursor');
            document.querySelector(`.slider-peg.x${pegNumber}`).appendChild(cursor);

            pixelPerSide = pegNumber;

            clearScreen();
            createScreen();

            allPixels.forEach((pixel) => pixel.addEventListener('mouseover', addColor));

        }
    });
})

function createSlider() {

    for (i = minResolution; i <= maxResolution; i++) {
        let peg = document.createElement('div');
        peg.classList.add('slider-peg');
        peg.classList.add(`x${i}`);
        document.querySelector('.options').appendChild(peg);

        if (i === minResolution) {
            let cursor = document.createElement('div');
            cursor.classList.add('slider-cursor');
            document.querySelector(`.slider-peg.x${i}`).appendChild(cursor);
        }
    }
}

function createScreen() {



    for (i = 0; i < (pixelPerSide ** 2); i++) {
        let pixel = document.createElement('div')
            , pixelSize = screenSize / pixelPerSide;


        pixel.classList.add('pixel');
        pixel.setAttribute('style', `width:${pixelSize}px; height:${pixelSize}px;`);
        screen.appendChild(pixel);
        allPixels = document.querySelectorAll('.pixel');

    }

}

function clearScreen() {

    while (screen.firstChild) {
        screen.removeChild(screen.firstChild);
    }

}







/*
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