let currentIndex1 = 0; 
const images1 = document.querySelectorAll('.img-banners img');
const indicators1 = document.querySelectorAll('.bola');
const totalImages1 = images1.length;

function showImage1(index) {
    const offset = -index * 100;
    document.querySelector('.img-banners').style.transform = `translateX(${offset}%)`;

    indicators1.forEach((indicator, i) => {
        indicator.classList.toggle('activa', i === index);
    });
}

function nextImage1() {
    currentIndex1 = (currentIndex1 + 1) % totalImages1;
    showImage1(currentIndex1);
}

indicators1.forEach(indicator => {
    indicator.addEventListener('click', () => {
        currentIndex1 = parseInt(indicator.dataset.index);
        showImage1(currentIndex1);
    });
});

setInterval(nextImage1, 3000); 
showImage1(currentIndex1);