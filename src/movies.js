// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies){
  let directors =[];
movies.forEach(movie =>{
  directors.push(movie.director)
})
return directors
}

console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){
  const movieSpielberg=movies.filter(movie=>movie.director="Steven Spielberg")
  let dramaSpielberg=[]
  let genre=[]
  movieSpielberg.forEach(drama =>{
    for (let i=0; i<genre.length;i++){
      if (movieSpielberg.genre[i]="Drama"){
        dramaSpielberg.push(drama)
      }
    }
  })
  return dramaSpielberg.length
}

console.log(howManyMovies(movies))
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const average = movies.reduce(function (sum, movie) {
    return sum + movie.score;
  }, 0)
  return (average/movies.length).toFixed(2)
}

console.log(scoresAverage(movies))


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  return movies.sort(function(a,b){
    if(a.year===b.year)
       return 1;
       
    return a.year-b.year;
       })
  }

console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  movies.sort();
  
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
