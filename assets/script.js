const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


/* variable*/
const arrowRight = document.querySelector(".banner.arrow_right");
const arrowLeft = document.querySelector(".Banner.arrow_left");
const images = document.querySelector(".banner-img");
const p = document.querySelector("#banner p")
let index = 0;
const dots = document.querySelector(".dots")



/* right*/
arrowRight.addEventListener("click", () => {
	const dot = document.querySelectorAll(".dots .dot");
	dot[index].classList.remove("dot_selected");
	index++;
	if (index > slides.length - 1) {
		index = 0;
	}
	dot[index].classList.add("dot_selected");
	images.src = slides[index].image;
	p.innerHTML = slides[index].tagLine;
}); 

/* left*/
arrowLeft.addEventListener("click", () => {
	const dot = document.querySelectorAll(".dots .dot")
	dot[index].classList.remove("dot_selected");
	index--;
	if (index < 0) {
		index = 3;
	}
	dot[index].classList.add("dot_selected");
	images.src = slides[index].image;
	p.innerHTML = slides[index].tagLine;
});

/*point/dot*/

function displayDots() {
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div")
		dot.classList.add("dot");
		dots.appendChild(dot);
		if (i == index) {
			dot.classList.add("dot_selected")
		}
	}

}

displayDots();



