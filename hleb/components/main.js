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
document
	.querySelector('#slider')
	.addEventListener('click', (e) => {
		if (e.target.id == 'btn') {
			F_slider(e.target);
		}
	});
