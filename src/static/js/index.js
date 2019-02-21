let prevBtn = document.querySelector('.slider-previous');
let nextBtn = document.querySelector('.slider-next');

let slide = document.querySelectorAll('.slider-item');

let sliderLength = slide.length;

let counter = 0;
let app = document.querySelector('.app');

app.classList.add('active');
// Je rajoute une classe qui se nomme active
slide[counter].classList.add('active');

console.log(sliderLength);

function prevSlide() {
    slide[counter].classList.remove('active');
    counter--;

    // Si le compteur est à 0, je reviens à la fin du tableau
    if (counter < 0) {
        counter = sliderLength - 1;
    }

    slide[counter].classList.add('active');

}

function nextSlide() {
    slide[counter].classList.remove('active');
    counter++;

    // Si le compteur est à la fin du tableau, je reviens au début.
    if (counter >= sliderLength) {
        counter = 0;
    }

    slide[counter].classList.add('active');

}

prevBtn.addEventListener('click', () => {
    prevSlide();
})

nextBtn.addEventListener('click', () => {
    nextSlide();
})