const movieInput = document.getElementById("movie-input")
const movieButton = document.getElementById("movie-btn")
const movieResult = document.getElementById("movie-result")

movieButton.addEventListener("click",()=>{
  const title = movieInput.value;
  const API_KEY = "d6315a0e"
  

  fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${API_KEY}`)
  .then((response) => {
    movieResult.innerHTML =" "
    return response.json()
  } )
  .then((json) => {
    if(json['Title']!==undefined){
    movieResult.innerHTML=
    `<img src="${json['Poster']}" height="500" width="500" alt="Poster">
      <h2>${json['Title']}</h2>
      <h3>${json['Director']}</h3>
      <h3>${json['Year']}</h3>
      <p>${json['Plot']}</p>`
    }
    else{
      movieResult.innerHTML="Error, can't find movie"
    }
  })
})