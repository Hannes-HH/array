const tvShows = [
  {
    title: "True Detective",
    publishingYear: 2014,
    rating: 9,
    watched: false,
  },
  {
    title: "The Boys",
    publishingYear: 2019,
    rating: 8.7,
    watched: true,
  },
  {
    title: "Game of Thrones",
    publishingYear: 2011,
    rating: 9.3,
    watched: true,
  },
  {
    title: "Mr. Robot",
    publishingYear: 2015,
    rating: 8.5,
    watched: false,
  },
  {
    title: "Chernobyl",
    publishingYear: 2019,
    rating: 9.4,
    watched: true,
  },
  {
    title: "Money Heist",
    publishingYear: 2017,
    rating: 8.3,
    watched: true,
  },
  {
    title: "Dark",
    publishingYear: 2017,
    rating: 8.8,
    watched: false,
  },
];
// One including only the titles of the movies
// - One including objects that include only the `title` and the `rating` properties
// - One including only the titles of the movies, but:
//   - If the rating is greater or equal to 9, we put the title in upper case.
//   - Else, we make the title lower case.
// Your code below

const tvShowTitle = tvShows.map((tvShow) => {
  return tvShow.title; 
}); 

const tvShowsTitleRating = tvShows.map((tvShow) => {
  return tvShow.title + " " + tvShow.rating;
}); 

const tvShowTitleCase = tvShows.map((x) => {
  if(x.rating >= 9) {
    return x.title.toUpperCase(); 
  } else {
    return x.title.toLowerCase();
  } 
}); 

console.log(tvShowTitle); 
console.log(tvShowsTitleRating); 
console.log(tvShowTitleCase); 
