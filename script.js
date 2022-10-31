let screen = document.querySelector('.screen')
    , pixelPerSide = 16;

for(i=0; i< (pixelPerSide**2); i++) {
    let pixel = document.createElement('div')
        ,pixelSize = 800/pixelPerSide;
    pixel.classList.add('pixel');
    pixel.setAttribute('style', `width:${pixelSize}px; height:${pixelSize}px;`);
    screen.appendChild(pixel);

}

let allPixels = document.querySelectorAll('.pixel');
let checkState = 0;
let addColor = function(e) {this.style.backgroundColor = 'black';}

window.addEventListener('mousedown', () => {checkState = 0; allPixels.forEach((pixel) => checkHover(pixel))}, true);
window.addEventListener('mouseup', () => {checkState = 1; allPixels.forEach((pixel) => checkHover(pixel))}, true);



function checkHover(pixel) {


    switch(checkState) {
        case 0: pixel.addEventListener('mouseover', addColor);
        console.log("test");
        break;

        case 1: pixel.removeEventListener('mouseover', addColor);
        console.log("test2");
        break;
    }

}