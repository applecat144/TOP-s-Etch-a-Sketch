let screen = document.querySelector('.screen')
    , minResolution = 16
    , maxResolution = 64
    , pixelPerSide = 16
    , checkMouseDown = 0
    , screenSwapRequired = 0;

let screenSize = document.querySelector('.screen').offsetWidth;
let allPixels = document.querySelectorAll('.pixel');
let addColor = function (e) {
    if (checkMouseDown) {
        this.style.backgroundColor = 'black';
    }
}


createScreen();
createSlider();

allPixels.forEach((pixel) => pixel.addEventListener('mouseover', addColor));

window.onmousedown = () => { checkMouseDown = 1; };
window.onmouseup = () => {
    checkMouseDown = 0;
    if (screenSwapRequired) {
        console.log("screenSwap"); clearScreen(); createScreen(); screenSwapRequired = 0;
    }
};

document.querySelectorAll('.slider-peg').forEach((peg) => {
    peg.addEventListener('mouseleave', (e) => {

        if (checkMouseDown) {

            let pegNumber = "";

            
            pegNumber = +e.target.classList["1"].substr(1);
            

            for (i = minResolution; i <= maxResolution; i++) {
                let currentPeg = document.querySelector(`.sliderview-peg.x${i}`);

                if (currentPeg.firstChild) {
                    currentPeg.removeChild(currentPeg.firstChild);
                }
            }


            for (i = minResolution; i <= pegNumber; i++) {
                document.querySelector(`.sliderview-peg.x${i}`).style.backgroundColor = "green";
            }

            for (i = pegNumber + 1; i <= maxResolution; i++) {

                document.querySelector(`.sliderview-peg.x${i}`).removeAttribute('style');
            }

            document.querySelector(`.sliderview-peg.x${maxResolution}`).style.borderRadius="0 0 7.5px 7.5px";

            let cursor = document.createElement('div');
            cursor.classList.add('slider-cursor');
            document.querySelector(`.sliderview-peg.x${pegNumber}`).appendChild(cursor);

            pixelPerSide = pegNumber;
            screenSwapRequired = 1;
            document.querySelector('.slider-footer').textContent=`${pixelPerSide}`




        }
    });
})

function createSlider() {

    for (i = minResolution; i <= maxResolution; i++) {
        let peg = document.createElement('div');
        peg.classList.add('sliderview-peg');
        peg.classList.add(`x${i}`);
        document.querySelector('.slider-view').appendChild(peg);

        if (i === minResolution) {
            let cursor = document.createElement('div');
            cursor.classList.add('slider-cursor');
            document.querySelector(`.sliderview-peg.x${i}`).appendChild(cursor);
        }
    }

    for (i = minResolution; i <= maxResolution; i++) {
        let peg = document.createElement('div');
        peg.classList.add('slider-peg');
        peg.classList.add(`x${i}`);
        document.querySelector('.slider-engine').appendChild(peg);

    }

    document.querySelector(`.sliderview-peg.x${minResolution}`).style.borderRadius="7.5px 7.5px 0 0";
    document.querySelector(`.sliderview-peg.x${maxResolution}`).style.borderRadius="0 0 7.5px 7.5px";
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
    console.log("I did create");
    allPixels.forEach((pixel) => pixel.addEventListener('mouseover', addColor));

}

function clearScreen() {

    while (screen.firstChild) {
        screen.removeChild(screen.firstChild);
    }
    console.log("I did clear");

}
