import F_slider from './slider/script.js';

// header
document.querySelectorAll('header .botLne span').forEach((elem) => {
	elem.addEventListener('click', (e) => {
		document.querySelectorAll('header .botLne span').forEach((elem) => {
			elem.classList.remove('accent');
		});
		e.target.classList.add('accent');
	});
});

// slider
let slider = document.querySelectorAll('#slider');
F_slider(slider);
