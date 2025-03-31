const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const imagesContainer = document.querySelector('.imagen');
const totalImages2 = document.querySelectorAll('.image').length;
let currentIndex2 = 0;

nextButton.addEventListener('click', () => {
    if (currentIndex2 < totalImages2 - 3) { 
        currentIndex2++;
        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex2 > 0) { 
        currentIndex2--;
        updateCarousel();
    }
});

function updateCarousel() {
    const offset = -currentIndex2 * (100 / 3); 
    imagesContainer.style.transform = `translateX(${offset}%)`;
    updateButtonStates(); 
}

function updateButtonStates() {
    if (currentIndex2 === 0) {
        prevButton.classList.add('disabled');
        prevButton.style.backgroundImage = "url('')"; 
    } else {
        prevButton.classList.remove('disabled');
        prevButton.style.backgroundImage = "url('./img/Izquierda.png')"; 
    }

    if (currentIndex2 >= totalImages2 - 3) {
        nextButton.classList.add('disabled');
        nextButton.style.backgroundImage = "url('')";
    } else {
        nextButton.classList.remove('disabled');
        nextButton.style.backgroundImage = "url('./img/Derecha.png')"; 
    }
}

updateButtonStates();