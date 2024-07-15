// adding pop-ups from izitoasts gallery
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// adding gallery library from simplelightbox 
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// making a function that check if we had any answers/hits in a database of API
export function createMarkup({ hits }, cardContainer) {
    if (hits.length === 0) {
        catchError();
        return;
    }

// if API has a datas, create a markup with answers/response with infos adding to the API configuration
    const markup = hits.map(({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads }) => {
        
// making an innerHTML with a gallery structure by making list
        return `
            <li class="list-item">
                <a href="${largeImageURL}">
                    <img class="card-image"
                    src="${webformatURL}"
                    alt="${tags}"
                    width="360">
                </a>
                <ul class="card-description-list">
                    <li class="card-description-item">
                        <h3 class="card-description-title">Likes</h3>
                        <p class="card-description-value">${likes}</p>
                    </li>
                    <li class="card-description-item">
                        <h3 class="card-description-title">Views</h3>
                        <p class="card-description-value">${views}</p>
                    </li>
                    <li class="card-description-item">
                        <h3 class="card-description-title">Comments</h3>
                        <p class="card-description-value">${comments}</p>
                    </li>
                    <li class="card-description-item">
                        <h3 class="card-description-title">Downloads</h3>
                        <p class="card-description-value">${downloads}</p>
                    </li>
                </ul>
            </li>
        `;
    }).join('');

// as an answer is need to making markup in a containers
    cardContainer.innerHTML = markup;
    const lightbox = new SimpleLightbox('.card-container a', {
        captions: true,
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    });

// refreshing simplelightbox gallery top see a results
    lightbox.refresh();
}
// making sure that API give error information during an empty results by usin iziToasts library
export function catchError() {
    iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
    });
}