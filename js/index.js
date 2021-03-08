const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');

nav.addEventListener('click', (e) => {
	// Open Nav Modal
	if (e.target.classList.contains('nav__toggler')) {
		overlay.classList.toggle('navigation');
		nav.classList.toggle('expanded');
	}

	// Close Nav Modal
	if (
		nav.classList.contains('expanded') &&
		e.target.parentElement.classList.contains('nav__item')
	) {
		overlay.classList.toggle('navigation');
		nav.classList.toggle('expanded');
	}
});
