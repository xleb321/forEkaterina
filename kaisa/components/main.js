document.querySelectorAll('li').forEach((elem) => {
	elem.addEventListener('click', (e) => {
		document.querySelectorAll('li').forEach((elem) => {
			elem.classList.remove('.menu_item');
		});
		e.target.classList.add('.menu_item');
	});
});
