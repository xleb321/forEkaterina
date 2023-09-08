document.querySelectorAll('div').forEach((elem) => {
	elem.addEventListener('click', (e) => {
		console.log((e.target.style.color = 'rgb(255,255,255)'));
	});
});
