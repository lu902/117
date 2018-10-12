var stars = document.querySelector(".stars");
var starCount = 2600;

function createStar(id) {
  var star = document.createElement("div");
  var size = Math.floor(Math.random() * 10);
  star.classList.add("star");
  star.classList.add("star-" + (id + 1).toString());
  star.style.width = size;
  star.style.height = size;
  star.style.left = Math.floor(Math.random() * 1920);
  star.style.top = Math.floor(Math.random() * 1080);
  star.style.opacity = `${0.3 + id * 0.05}`;
  star.style["animation-duration"] = Math.floor(Math.random() * 10) + "s";
  star.style["animation-delay"] = Math.floor(Math.random() * 3) + "s";
  console.log(Math.floor(Math.random() * 10));
  stars.appendChild(star);
}

for (let i = 0; i < starCount; i = i + 1) {
  createStar(i);
}
