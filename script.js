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

allPixels.forEach((pixel) => checkHover(pixel));

function checkHover(pixel) {

    pixel.addEventListener('mouseover', () => {pixel.style.backgroundColor = 'black';} )
    console.log('it did it');

}