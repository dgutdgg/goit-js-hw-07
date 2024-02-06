import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector(".gallery");

const galleryHTML = galleryItems
  .map(
    (item) => `
  <div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}">
    </a>
  </div>
`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryHTML);

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  const lightbox = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
  `);

  lightbox.show();
});
