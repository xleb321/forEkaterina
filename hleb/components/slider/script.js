export default function F_slider(e) {
	let index = 0;
	const F_index = () => {
		document.querySelectorAll('.slide').forEach((elem) => {
			if (elem.classList.contains('active')) {
				index += +elem.dataset.num;
			}
		});
	};

	F_index();

	let thisSlide = index + +e.dataset.num;
  
	if (thisSlide >= slider.children[0].children.length - 2) {
		thisSlide = 0;
	} else if (thisSlide <= -1) {
		thisSlide = slider.children[0].children.length - 3;
	}

	slider.querySelector('.active').classList.remove('active');
	slider.children[0].children[thisSlide].classList.add('active');
}
