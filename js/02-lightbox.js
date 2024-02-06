import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector(".gallery");

const galleryHTML = galleryItems
  .map(
    (item) => `
  <div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" title="${item.description}">
    </a>
  </div>
`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryHTML);

const lightbox = new SimpleLightbox(".gallery a");

console.log(lightbox);
console.log(galleryItems);
