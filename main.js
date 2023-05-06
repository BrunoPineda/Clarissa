const topBar = document.querySelector('.topbar');


var mensajes = [
	"Hola, ¿cómo estás?",
	"¿Qué planes tienes para hoy?",
	"¿Te gustaría salir a caminar?",
	"Me encanta pasar tiempo contigo",
	"¿Quieres ir al por un pinkberry?",
	"¿Qué opinas de salir con Esteff el proximo domingo?",
	"Me alegra mucho haberte conocido"
];

function siguienteMensaje() {
	var mensaje = document.getElementById("mensaje");
	var indice = Math.floor(Math.random() * mensajes.length);
	mensaje.innerHTML = mensajes[indice];
}


//boton
const playButton = document.querySelector('.play-button');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-button');

playButton.addEventListener('click', () => {
	modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
	modal.style.display = 'none';
});

const button = document.querySelector('.card-concentracion');

button.addEventListener('click', () => {
	Swal.fire({
		title: 'ClarissaFy uwu',
		html: `
			<audio controls autoplay>
				<source src="music/a.mp3" type="audio/mpeg">
			</audio>
		`,
	});
});


function musica2(){
	Swal.fire({
		title: 'ClarissaFy uwu',
		html: `
			<audio controls autoplay>
				<source src="music/b.mp3" type="audio/mpeg">
			</audio>
		`,
	});
}
function musica3(){
	Swal.fire({
		title: 'ClarissaFy uwu',
		html: `
			<audio controls autoplay>
				<source src="music/d.mp3" type="audio/mpeg">
			</audio>
		`,
	});
}
function musica4(){
	Swal.fire({
		title: 'ClarissaFy uwu',
		html: `
			<audio controls autoplay>
				<source src="music/c.mp3" type="audio/mpeg">
			</audio>
		`,
	});
}
function musica5(){
	Swal.fire({
		title: 'ClarissaFy uwu',
		html: `
			<audio controls autoplay>
				<source src="music/e.mp3" type="audio/mpeg">
			</audio>
		`,
	});
}
function musica6(){
	Swal.fire({
		title: 'ClarissaFy uwu',
		html: `
			<audio controls autoplay>
				<source src="music/f.mp3" type="audio/mpeg">
			</audio>
		`,
	});
}


// Cambiar opacidad con Scroll
window.addEventListener('scroll', () => {
	if (window.scrollY > 0) {
		topBar.classList.add('transparent');
	} else {
		topBar.classList.remove('transparent');
	}
});

// Nueva variable para almacenar altura del Topbar
let topbarHeight = topBar.offsetHeight;
// Añadimos un paddingTop basado en la altura al main-content o el contenido principal
const mainContent = document.querySelector('.main-content');
mainContent.style.paddingTop = `${topbarHeight + 20}px`;

/* ********************************** */
/*             BOTON PLAY             */
/* ********************************** */
const containerConcentracion = document.querySelectorAll(
	'.card-concentracion'
);
const containerSpotifyPlaylists = document.querySelectorAll(
	'.card-spotify-playlists'
);

// Función que se va a repetir
const createButton = card => {
	// Crear el botón
	const button = document.createElement('button');
	button.innerHTML = '<i class="fa-solid fa-play"></i>';

	// Agregar el botón al elemento hijo
	card.appendChild(button);

	// Ocultar el botón inicialmente
	button.style.display = 'none';
	button.classList.add('btn-play');

	// Agregamos un evento de hover a este elemento
	// Se necesita cuando el mouse entra y cuando sale
	card.addEventListener('mouseover', () => {
		button.style.display = 'block';
	});

	card.addEventListener('mouseout', () => {
		button.style.display = 'none';
	});
};

// Usamos la función en las dos filas de contenedores
containerConcentracion.forEach(card => {
	createButton(card);
});

containerSpotifyPlaylists.forEach(card => {
	createButton(card);
});
