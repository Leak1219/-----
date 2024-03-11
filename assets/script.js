
// let slideIndex = 0;
//   const slides = document.querySelector('.slides');
//   const images = document.querySelectorAll('.slides img');
//   const totalImages = images.length;

//   setInterval(() => {
//     slideIndex = (slideIndex + 1) % totalImages;
//     slides.style.transform = `translateX(-${slideIndex * 100}%)`;
//   }, 2000); 

let slideIndex = 0;
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const totalImages = images.length;
let slideInterval;

function startSlide() {
    slideInterval = setInterval(() => {
        slideIndex = (slideIndex + 1) % totalImages;
        // slides.style.transition = 'transform 1.5s ease';
        slides.style.transform = `translateX(-${slideIndex * 10}%)`;
    }, 2000);
}

function stopSlide() {
    clearInterval(slideInterval);
}

startSlide();

// ユーザーがページを離れる時にタイマーをクリアする
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        stopSlide();
    } else {
        startSlide();
    }
});

function redirectToContact() {
    window.location.href = "contact.html"; // リダイレクト先のHTMLファイルのパス
}





