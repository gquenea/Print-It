const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Déclaration des variables
const imageElement = document.querySelector(".slider_img");
const tagLineElement = document.querySelector(".tagline");
const arrowsElement = document.querySelectorAll(".arrow");
const dotsElement = document.querySelector(".dots");
let currentSlide = 0;

// Initialisation du slider et des dots
slides.forEach((slide, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");

  if (index === 0) {
    dot.classList.add("dot_selected");
    createImage(slide.image);
    tagLineElement.innerHTML = slide.tagLine;
  }

  dotsElement.appendChild(dot);

  dot.addEventListener("click", () => {
    changeSlide(index);
  });
});

// Fonction pour créer l'image
function createImage(src) {
  imageElement.innerHTML = "";
  const imgElement = document.createElement("img");
  imgElement.src = src;
  imgElement.alt = "Slide Image";
  imgElement.classList.add("banner-img"); // Ajout de classes supplémentaires si nécessaire
  imageElement.appendChild(imgElement);
}

// Fonction qui permet de changer de slide
function changeSlide(index) {
  document.querySelectorAll(".dot").forEach((dot) => {
    dot.classList.remove("dot_selected");
  });

  currentSlide = index;
  createImage(slides[currentSlide].image);
  tagLineElement.innerHTML = slides[currentSlide].tagLine;
  document.querySelectorAll(".dot")[currentSlide].classList.add("dot_selected");
}

// Gestion des flèches au clic
arrowsElement.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.classList.contains("arrow_right")) {
      currentSlide = (currentSlide + 1) % slides.length;
    } else if (e.target.classList.contains("arrow_left")) {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    }
    changeSlide(currentSlide);
  });
});
