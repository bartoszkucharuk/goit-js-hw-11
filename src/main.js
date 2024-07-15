import { getPictures } from "./js/API(pixabay).js";
import { createMarkup, catchError } from "./js/galleryMarkups.js";

const searchForm = document.querySelector(".search-form");
const cardContainer = document.querySelector(".card-container");
const loader = document.querySelector(".loader");
searchForm.addEventListener("submit", handlerSearch);

function handlerSearch(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const userValue = form.elements.search.value.toLowerCase();

    loader.style.display = "flex";

    getPictures(userValue)
        .then((data) => createMarkup(data, cardContainer))
        .catch(catchError)
        .finally(() => {
            form.reset();
            loader.style.display = "none";
        });
}