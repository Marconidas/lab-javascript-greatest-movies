// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let arrayDirectores = moviesArray.map((valor, i) => moviesArray[i].director);
  let arrayTempDirectores = moviesArray.map(
    (valor, i) => moviesArray[i].director
  );
  if (arrayTempDirectores.length === 0) {
    let result = null;
    return result;
  } else {
    let arrayCleaner = [];
    let tamañoInicial = arrayTempDirectores.length;
    arrayCleaner.push(arrayTempDirectores.shift());
    for (let i = 0; i < tamañoInicial - 1; i++) {
      do {
        if (arrayTempDirectores.includes(arrayCleaner[i])) {
          let temp = arrayTempDirectores.indexOf(arrayCleaner[i]);
          arrayTempDirectores.splice(temp, 1);
          tamañoInicial--;
        }
      } while (arrayTempDirectores.includes(arrayCleaner[i]));
      if (typeof arrayTempDirectores[0] !== "undefined") {
        arrayCleaner.push(arrayTempDirectores.shift());
      }
    }
  }
  return arrayDirectores;
}
//////////////////////////////////////////////////////////////////////
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    let value = 0;
    return value;
  } else {
    let moviesDrama = {};
    let countDramas = 0;
    let countSteven = 0;
    for (let i = 0; i < moviesArray.length; i++) {
      if (moviesArray[i].genre.includes("Drama")) {
        countDramas++;
        moviesDrama = {
          ...moviesArray,
          genre: moviesArray[i].genre.filter((drama) => drama === "Drama"),
        };
      }
      if (
        moviesArray[i].director === "Steven Spielberg" &&
        moviesArray[i].genre.includes("Drama")
      ) {
        countSteven++;
      }
    }
    if (countSteven === 0) {
      const value = 0;
      return value;
    } else if (countSteven === 2) {
      value = 2;
      return value;
    } else {
      const value = countSteven;
      return value;
    }
  }
}

//////////////////////////////////////////////////////////////////////
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    const value = 0;
    return value;
  } else {
    const scoreTotal = moviesArray.reduce((count, nota) => {
      let num;
      if (!nota.score) {
        num = 0;
      } else {
        num = nota.score;
      }
      return count + num;
    }, 0);
    let media = scoreTotal / moviesArray.length;
    media = Number(media.toFixed(2));
    const scoreRedondeado = Math.round((media * 100) / 100);
    return media;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let countDrama = 0;
  let scoreDrama = 0;
  for (let i = 0; i < moviesArray.length; i++) {
    if (moviesArray[i].genre.includes("Drama")) {
      countDrama++;
      scoreDrama = scoreDrama + moviesArray[i].score;
    }
  }
  if (countDrama === 0) {
    const value = 0;
    return value;
  } else {
    scoreDrama = Number(scoreDrama.toFixed(2));
    mediaDramaScore = scoreDrama / countDrama;
    mediaDramaScore = Number(mediaDramaScore.toFixed(2));
    return mediaDramaScore;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const arrayOrdenada = moviesArray.slice().sort((valor1, valor2) => {
    if (valor1.year === valor2.year) {
      return valor1.title.localeCompare(valor2.title);
    } else {
      return valor1.year - valor2.year;
    }
  });
  return arrayOrdenada;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesTitles = moviesArray.map((movie) => movie.title);
  moviesTitles.sort((title1, title2) => title1.localeCompare(title2));
  const veinteTitles = moviesTitles.slice(0, 20);
  const value = veinteTitles;
  return value;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const moviesArrayMapTime = moviesArray.map((movie) => {
    let tempArrayMovie = { ...movie };
    let duration = tempArrayMovie.duration;
    let hours = 0;
    let minutes = 0;
    if (duration.includes("h")) {
      let hoursMatch = duration.match(/(\d+)h/);
      if (hoursMatch) {
        hours = parseInt(hoursMatch[1]);
      }
    }
    if (duration.includes("min")) {
      let minutesMatch = duration.match(/(\d+)min/);
      if (minutesMatch) {
        minutes = parseInt(minutesMatch[1]);
      }
    }
    tempArrayMovie.duration = hours * 60 + minutes;
    return tempArrayMovie;
  });
  return moviesArrayMapTime;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  } else {
    const yearScores = {};
    moviesArray.forEach(movie => {
      const year = movie.year;
      const score = parseFloat(movie.score);
      if (!yearScores[year]) {
        yearScores[year] = {  sum: 0,  count: 0 };
      }
      yearScores[year].sum += score;
      yearScores[year].count += 1;
    });
    let bestYear = null;
    let bestAvgScore = 0;
    for (const year in yearScores) {
      const avgScore = yearScores[year].sum / yearScores[year].count;
      if (avgScore > bestAvgScore || (avgScore === bestAvgScore && (!bestYear || year < bestYear))) {
        bestYear = year;
        bestAvgScore = avgScore;
      } 
    }
    fraseFinal = `El mejor año fue ${bestYear} con una puntuación media de ${bestAvgScore.toFixed(2)}`;
    //const result = [bestYear, bestAvgScore];
    const result = [fraseFinal];
    /*result={
      frase:fraseFinal
    };*/
    return result;
  }
}
