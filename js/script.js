let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?");
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотреных фильмов?", " ");
    const b = prompt("На сколько оцените его?", " ");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("Done!");
    } else {
      console.log("error");
      i--;
    }
  }
}

rememberMyFilms();

// let i = 0;
// while (i < 2) {
//   const a = prompt("Один из последних просмотреных фильмов?", " ");
//   const b = prompt("На сколько оцените его?", " ");

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("Done!");
//   } else {
//     console.log("error");
//     i--;
//   }
//   i++;
// }

// let i = 0;
// do {
//   const a = prompt("Один из последних просмотреных фильмов?", " ");
//   const b = prompt("На сколько оцените его?", " ");

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("Done!");
//   } else {
//     console.log("error");
//     i--;
//   }
//   i++;
// } while (i < 2);

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман!");
  } else {
    console.log("произошла ошибка!");
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр по порядку ${i}?`);
  }
}
writeYourGenres();
