const key = 'AIzaSyAPPLMeYS5y0S9VMzPdAC8xZK4XktvRx94';
const baseUrl = 'https://www.googleapis.com/youtube/v3/';

export const youtubeSearchService = (keyword) => {
    let url = `${baseUrl}search?q=${keyword}&part=snippet&type=video&maxResults=10&key=${key}`;
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(res => res.json());
}
