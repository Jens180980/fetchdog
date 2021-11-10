// Endpoints
const randomUrl = "https://dog.ceo/api/breeds/image/random"
let breedURL //Dynamic url

// Loads random image on load and click
window.onload = getDogs(randomUrl);
newRandom.addEventListener('click', () => getDogs(randomUrl))

// Gets random image from certain breeds
dogBreed.addEventListener('click', () => {
  let dogBreedValue = dogBreed.value
  console.log(dogBreedValue)
  breedURL = `https://dog.ceo/api/breed/${dogBreedValue}/images/random`
  getDogs(breedURL)
})

sameBreed.addEventListener('click', () => getDogs(breedURL))

// Gets dogimages
function getDogs(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      dogImg.src = data.message
    })
}