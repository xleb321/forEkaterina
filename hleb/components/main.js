import F_slider from './slider/script.js';

function clear() {
	for (let i = 1; i < document.querySelector('.content').children.length; i++) {
		document.querySelector('.content').children[i].remove();
	}
}


function headContacts(obg) {
	obg.innerHTML += /*html*/ `
		<section class='contactHead' data-speed="0.85" data-lag="0.5">
			Контакты и информация
		</section>
	`;
}

function infoContacts(obg) {
	obg.innerHTML += /*html*/ `
		<section class='contactInfo' data-speed="0.9" data-lag="0.5">
			<div>
				<div class='head'>Телефон</div>
				<div class='info'>+7 (928) 609-51-10</div>
			</div>
			<div>
				<div class='head'>Почта</div>
				<div class='info'>mirkoles61@yandex.ru</div>
			</div>
			<div>
				<div class='head'>Адрес</div>
				<div class='info'>г. Ростов-на-Дону,
				Днепропетровская, 54</div>
			</div>
			<div>
				<div class='head'>График работы</div>
				<div class='info'>Ежедневно: 09:00 - 18:00</div>
			</div>
		</section>
	`;
}


// header
document.querySelectorAll('header .botLne span').forEach((elem) => {
	elem.addEventListener('click', (e) => {
		document.querySelectorAll('header .botLne span').forEach((elem) => {
			elem.classList.remove('accent');
		});
		e.target.classList.add('accent');
	});
});

// GSAP
if (ScrollTrigger.isTouch !== 1) {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 2,
		effects: true,
	});
}

document.querySelector('#slider').addEventListener('click', (e) => {
	if (e.target.id == 'btn') {
		F_slider(e.target);
	}
});
