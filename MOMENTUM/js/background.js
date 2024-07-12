const images = ["미니언즈.jpg","몬스터.jpg","토이스토리.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
console.log(chosenImage)



bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage)