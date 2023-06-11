import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
let list = document.querySelector(".gallery");

galleryItems.forEach((galleryItem) => {
  const listItem = createListItem(galleryItem);
  list.appendChild(listItem);
});

function createListItem(galleryItem) {
  let li = document.createElement("li");
  li.classList.add("gallery__item");

  let link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = galleryItem.original;
  link.addEventListener("click", (event) => handleLinkClick(event));

  let image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = galleryItem.preview;
  image.dataset.source = galleryItem.original;
  image.alt = galleryItem.description;

  link.appendChild(image);
  li.appendChild(link);

  return li;
}

let largeImageInstance;

document.onkeydown = function (event) {
  event = event || window.event;

  if (
    (event.key === "Escape" || event.key === "Esc") &&
    largeImageInstance !== undefined
  ) {
    largeImageInstance.close();
  }
};

function handleLinkClick(event) {
  event.preventDefault();
  const image = event.target;
  const imageUrl = image.dataset.source;
  const imageAlt = image.alt;

  largeImageInstance = basicLightbox.create(
    `
    <img src='${imageUrl}' alt='${imageAlt}'>
`,
    {
      closable: false,
    }
  );

  largeImageInstance.show();
}
