
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

if (personalMovieDB.count <= 10) {
    console.log("Просмотрено довольно мало фильмов");
}  else if ( personalMovieDB.count <= 30) {
    console.log("Вы класcический зритель");
}   else if ( personalMovieDB.count > 30 ) {
    console.log("Вы киноман");
}   else {
    console.log("Произошла ошибка");
}

/*const a = prompt("Один из просмотренных фильмов?", " "),
      b = prompt("На сколько оцените его?", " "),
      c = prompt("Один из просмотренных фильмов?", " "),
      d = prompt("На сколько оцените его?", " "); */

      
      /* personalMovieDB.movies[c] = d; */

   
 
 for(let i=0; i < 2; i++) {
 
       const a = prompt("Один из просмотренных фильмов?", " "),
           b = prompt("На сколько оцените его?", " ");
             

   if(a != null && b !=null && a.length < 50 && b != " " && a != " ")   
           
   {   console.log("done");
       personalMovieDB.movies[a] = b;
   } else {
       console.log("error");
       i--;
   }

 }
    
console.log(personalMovieDB);