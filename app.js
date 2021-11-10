// Endpoints
const randomUrl = "https://dog.ceo/api/breeds/image/random"
let BreedURL

// Loads random image on load and click
window.onload = getDogs(randomUrl);
newRandom.addEventListener('click', () => getDogs(randomUrl))

// Gets random image from certain breeds

dogBreed.addEventListener('click', () => {

  let dogBreedValue = dogBreed.value
  console.log(dogBreedValue)
  BreedURL = `https://dog.ceo/api/breed/${dogBreedValue}/images/random`
  getDogs(BreedURL)

})


// Downloads current image to desktop





// Gets dogimage
function getDogs(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      dogImg.src = data.message
    })
}