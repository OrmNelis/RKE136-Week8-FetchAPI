const movieTitle = document.querySelector('.movie-title');
const movieGenres = document.querySelector('.genres');
const movieDuration = document.querySelector('.movie-duration');
const moviePoster = document.querySelector('.movie-poster-container img');
const movieQuote = document.querySelector('.movie-info-quote');
const movieOverview = document.querySelector('.movie-info-overview');
const releaseDate = document.querySelector('.release-date');

window.onload = () => {

    let url = 'https://api.themoviedb.org/3/movie/274870?api_key=54550313e3c18136a8321c93223864f6';

    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        movieTitle.textContent = data.title;

        let date = new Date(data.release_date);
        releaseDate.textContent = `${date.getFullYear()} ${data.production_countries[0].iso_3166_1}`;

        movieDuration.textContent = `${data.runtime} m`;
        movieQuote.textContent = data.tagline;
        movieOverview.textContent = data.overview;
       
        moviePoster.src = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.poster_path}`;
        moviePoster.alt = data.title;
 
        
        let genrestoDisplay = '';
        data.genres.forEach(genre => {
            genrestoDisplay = genrestoDisplay + `${genre.name}, `;
        });
        
        let genresUpdated = genrestoDisplay.slice(0, -2) + '.';
        console.log(genresUpdated);
        movieGenres.textContent = genresUpdated;
 
       
    });
}