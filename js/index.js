const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const getStartedBtn = document.querySelector('.intro__back');
const productSelectBtns = document.querySelectorAll('.about .btn');
const backModal = document.querySelector('.backing-modal');
const pledgeForms = document.querySelectorAll('.product__pledge');
const successModal = document.querySelector('.success-modal');

function renderBackModal() {
	overlay.classList.add('active');
	backModal.classList.add('active');
	window.scroll(0, 0);
}

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

// Open Backing Modal
getStartedBtn.addEventListener('click', renderBackModal);

backModal.addEventListener('click', (e) => {
	const products = document.querySelectorAll('.backing-modal .product');

	// Close Backing Modal
	if (e.target.classList.contains('backing__exit')) {
		overlay.classList.toggle('active');
		backModal.classList.toggle('active');
		for (let product of products) {
			product.classList.remove('selected');
		}
	}

	// Select Product
	products.forEach((product) => {
		product.addEventListener('click', () => {
			for (let product of products) {
				product.classList.remove('selected');
			}

			if (!product.classList.contains('sold-out')) {
				product.classList.add('selected');
			}
		});
	});
});

// Opening and Selecting a Product
productSelectBtns.forEach((productBtn) => {
	productBtn.addEventListener('click', () => {
		// Grab Selected Product's Name
		const productName =
			productBtn.parentElement.parentElement.children[0].firstElementChild
				.textContent;
		const productsModal = document.querySelectorAll('.backing-modal .product');

		// Loop Through Products Modal for a Match
		productsModal.forEach((product) => {
			// Grab Product's Name on Modal
			const productModalName =
				product.children[0].children[1].firstElementChild.textContent;

			// Select Product on Modal
			if (productName === productModalName) {
				product.classList.add('selected');
			}
		});

		renderBackModal();
	});
});

// Exit Success Modal
successModal.addEventListener('click', (e) => {
	if (e.target.classList.contains('btn')) {
		overlay.classList.remove('active');
		successModal.classList.remove('active');
	}
});

// Pledge Form Submit
pledgeForms.forEach((form) => {
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const input = form.children[1].children[1];

		if (input.value === '') {
			input.classList.add('error');
		} else {
			input.classList.remove('error');
			backModal.classList.remove('active');
			successModal.classList.add('active');
		}
	});
});
