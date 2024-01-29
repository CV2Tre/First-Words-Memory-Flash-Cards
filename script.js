const imageMap= {
    cake:"assets/cake.webp",
    apple:"assets/apple.webp",
    boy:"assets/boy.jpg",
    carrot:"assets/carrot.webp",
    clock:"assets/clock.webp",
    dog:"assets/dog.jpg",
    duck:"assets/duck.webp",
    frog:"assets/frog.jpg",
    girl:"assets/girl.jpg",
    grapes:"assets/grapes.webp",
    key:"assets/key.jpg",
    lion:"assets/lion.jpg",
    rabbit:"assets/rabbit.jpg",
    ring:"assets/ring.webp",
    sun:"assets/sun.jpg",
    tree:"assets/tree.jpg"
}

//Function to get a random key and its value from an object
function getRandomKeyValue(obj) {

  // Get all keys of the object
  const keys = Object.keys(obj);
 
  // Select a random key
  const randomKey = keys[Math.floor(Math.random() * keys.length)];

  // Return the random key and its corresponding value
  return { key: randomKey, value: obj[randomKey] };
}

const card = document.querySelector('.card__flip');
const card_face = document.getElementById('image');
const wordButton = document.querySelector('.word');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous')

card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
})

wordButton.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
})

nextButton.addEventListener('click', function() {
    const randomKeyValue = getRandomKeyValue(imageMap);
    card_face.src = randomKeyValue.value;
    document.getElementById('word').innerText = randomKeyValue.key;
    document.getElementById('card_back').innerText = randomKeyValue.key;
})

previousButton.addEventListener('click', function() {
    const randomKeyValue = getRandomKeyValue(imageMap);
    card_face.src = randomKeyValue.value;
    document.getElementById('word').innerText = randomKeyValue.key;
    document.getElementById('card_back').innerText = randomKeyValue.key;
})

