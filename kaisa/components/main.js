document.querySelectorAll('.container_ span').forEach((elem) => {
	elem.addEventListener('click', (e) => {
		document.querySelectorAll('.container_ span').forEach((elem) => {
			elem.classList.remove('accent');
		});
		e.target.classList.add('accent');
	});
});

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const sliders = Array.from(slider.querySelectorAll('img'));
const slideCount = sliders.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
	slideIndex = (slideIndex - 1 + slideCount) % slideCount;
	updateSlider();
}

function showNextSlide() {
	slideIndex = (slideIndex + 1) % slideCount;
	updateSlider();
}

function updateSlider() {
	sliders.forEach((slide, index) => {
		if (index === slideIndex) {
			slide.style.display = 'block';
		} else {
			slide.style.display = 'none';
		}
	});
}

updateSlider();
