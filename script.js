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

window.addEventListener('mousedown', () => {allPixels.forEach((pixel) => checkHover(pixel))});



function checkHover(pixel) {

    const addColor = () => {pixel.style.backgroundColor = 'black';};

    pixel.addEventListener('mouseover', addColor)

}