let slides = document.querySelectorAll('.slide-single');
let slider = []; //d него будет получать src атрибуты картинки

    for (let i = 0; i < slides.length; i++) {
        slider[i] = slides[i].src; // элемент [] = источник картинки
        slides[i].remove(); // удаляем картинку, у которой уже взяли источник
    }

let step = 0; // шаг (какую картинку по счету показывать)
let offset = 0; // смещение изображения

function draw () {
    let img = document.createElement('img');
    img.src = slider[step]; // ссылка на картинку
    img.classList.add('slide-single');
    img.style.left = offset*452 + 'px';
    document.querySelector('#slide').appendChild(img);

        if (step + 1 == slider.length) {
            step = 0;
        } else {
            step++;
        }
        offset = 1;
}

function left () {
    document.onclick = null;
    let slides2 = document.querySelectorAll('.slide-single');//видимые на данный млмент картинки
    let offset2 = 0;
        for (let i = 0; i < slides2.length; i++) {
            slides2[i].style.left = offset2*452 - 452 + 'px';
            offset2++;
        }
    setTimeout(function(){
        slides2[0].remove();
        draw();
        document.onclick = left;
    }, 1000);
    
}

draw(); draw(); 
document.onclick = left;

