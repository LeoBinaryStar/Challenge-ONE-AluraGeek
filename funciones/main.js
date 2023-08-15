document.addEventListener('DOMContentLoaded', function () {
	function initCarousel(carouselClass, time) {
		const items = document.querySelectorAll(`.${carouselClass} .carousel-item`);
		const totalItems = items.length;
		const intervalTime = time; // se toma el valor que recibe
		let currentIndex = 0;
		let isAnimationStopped = false; // variable para controlar el estado de la animación
		let carouselInterval;

		function showItem(index) {
			if (index < 0 || index >= totalItems) return;
			currentIndex = index;
			const offset = -currentIndex * 100;
			document.querySelector(`.${carouselClass} .carousel-inner`).style.transition = 'transform 0.5s ease';
			document.querySelector(`.${carouselClass} .carousel-inner`).style.transform = `translateX(${offset}%)`;
		}

		function autoAdvance() {
			if (!isAnimationStopped) {
				currentIndex++;
				showItem(currentIndex);

				// Si se llega al último elemento, regresar al primero después de una breve pausa
				if (currentIndex === totalItems) {
					setTimeout(() => {
						currentIndex = 0;
						showItem(currentIndex);
					}, 0);
				}
			}
		}

		// Iniciar el carrusel automáticamente
		carouselInterval = setInterval(autoAdvance, intervalTime);

		// Agregar evento para detener la animación al hacer clic en el carrusel
		const carouselElement = document.querySelector(`.${carouselClass}`);
		carouselElement.addEventListener('click', () => {
			if (isAnimationStopped) {
				// Reanudar la animación
				carouselInterval = setInterval(autoAdvance, intervalTime);
			} else {
				// Detener la animación
				clearInterval(carouselInterval);
			}
			isAnimationStopped = !isAnimationStopped;
		});
	}

	function initCarouselInfinite(carouselClass, time) {
		const carouselInner = document.querySelector(`.${carouselClass} .carousel-inner`);
		const items = carouselInner.children;
		const totalItems = items.length;
		const intervalTime = time;

		let currentIndex = 0;
		let isAnimationPaused = false;
		let carouselInterval;

		// Clonar el primer elemento y agregarlo al final del carrusel
		const firstItemClone = items[0].cloneNode(true);
		carouselInner.appendChild(firstItemClone);

		function showItem(index) {
			const offset = -index * 100;
			carouselInner.style.transition = 'transform 0.5s ease';
			carouselInner.style.transform = `translateX(${offset}%)`;
		}

		function autoAdvance() {
			if (!isAnimationPaused) {
				currentIndex++;
				// Si se llega al clon del primer elemento (elemento duplicado al final), volver al primer elemento (índice 0) sin retraso
				if (currentIndex === totalItems) {
					currentIndex = 0;
					// Al volver al primer elemento, quitar la transición para que no haya un salto brusco al primer elemento
					carouselInner.style.transition = 'none';
					showItem(currentIndex);
				} else {
					showItem(currentIndex);
				}
			}
		}

		// Iniciar el carrusel automáticamente
		carouselInterval = setInterval(autoAdvance, intervalTime);

		// Función para pausar/reanudar la animación al hacer clic en el carrusel
		function toggleAnimation() {
			isAnimationPaused = !isAnimationPaused;
			if (isAnimationPaused) {
				clearInterval(carouselInterval);
			} else {
				carouselInterval = setInterval(autoAdvance, intervalTime);
			}
		}

		// Agregar evento para pausar/reanudar la animación al hacer clic en el carrusel
		const carouselElement = document.querySelector(`.${carouselClass}`);
		carouselElement.addEventListener('click', toggleAnimation);
	}

	const carousel = document.querySelector('.videojuegos .carousel-inner');

	carousel.addEventListener('mouseenter', () => {
		carousel.style.animationPlayState = 'paused';
	});

	carousel.addEventListener('mouseleave', () => {
		carousel.style.animationPlayState = 'running';
	});



	// Inicializar carrusel para la clase "carousel-anime"
	initCarousel('carousel-anime', 5000);

	// Inicializar carrusel para la clase "carousel-games"
	initCarousel('carousel-games', 5000);

	// Inicializar carrusel para la clase "carousel-productos"
	initCarousel('carousel-productos', 5000);
});