import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const list = document.querySelector(".gallery");

galleryItems.forEach((galleryItem) => {
  const li = document.createElement("li");
  li.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList = "gallery__link";
  link.href = galleryItem.original;
  link.title = galleryItem.description;

  const image = document.createElement("img");
  image.src = galleryItem.preview;
  image.alt = galleryItem.description;
  image.classList.add("gallery__image");

  link.appendChild(image);
  li.appendChild(link);
  list.appendChild(li);
});

new SimpleLightbox(".gallery li a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
