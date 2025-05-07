const title1 = document.querySelector('.title-1');
const title2 = document.querySelector('.title-2');
const title3 = document.querySelector('.title-3');

const content1 = document.querySelector('.content-1');
const content2 = document.querySelector('.content-2');
const content3 = document.querySelector('.content-3');

// Fonction pour réinitialiser tous les contenus et onglets
function resetTabs() {
  // Cacher tous les contenus
  content1.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "none";

  // Retirer la classe active des titres
  title1.classList.remove("title-active");
  title2.classList.remove("title-active");
  title3.classList.remove("title-active");
}

// Affichage de Skills
title1.addEventListener("click", () => {
  resetTabs();
  content1.style.display = "block";
  title1.classList.add("title-active");
});

// Affichage de Experience
title2.addEventListener("click", () => {
  resetTabs();
  content2.style.display = "block";
  title2.classList.add("title-active");
});

// Affichage de Education
title3.addEventListener("click", () => {
  resetTabs();
  content3.style.display = "block";
  title3.classList.add("title-active");
});

