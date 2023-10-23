const header = document.getElementById('header')
console.log(header)

window.addEventListener('scroll', () => {
	const scrollPos = window.scrollY

	if (scrollPos > 140) {
		header?.classList.add('header__mini')
	}
})
