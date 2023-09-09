document.querySelectorAll('header .botLne span').forEach((elem)=>{
	elem.addEventListener('click',(e)=>{
		document.querySelectorAll('header .botLne span').forEach((elem)=>{
			elem.classList.remove('accent')
		})
		e.target.classList.add('accent')
	})
})
