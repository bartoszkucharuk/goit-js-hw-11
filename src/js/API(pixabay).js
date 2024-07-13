// adding all of necessary information to the API from https://pixabay.com/api/docs/
const baseURL = 'https://pixabay.com/api/';
const myPixabayKey = "44872402-0762bbf0a5ccd686fb6258473";
const image_type = 'photo';
const orientation = 'horizontal';
const safesearch = true;

// making a query to the API that returns answers for user's searching input
export function getPictures(query) {
    return fetch(`${baseURL}?key=${myPixabayKey}&q=${query}&image_type=${image_type}&orientation=${orientation}&safesearch=${safesearch}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
}