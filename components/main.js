document.querySelectorAll('div').forEach((elem) => {
	elem.addEventListener('dblclick', (e) => {
		document.querySelectorAll('div').forEach((elem) => {
			elem.classList.remove('active');
		});
		e.target.classList.add('active');
	});
});
