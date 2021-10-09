const battlesCount = 4;
const list = document.querySelector(".battles");
const baseURL = "https://img.icons8.com/ios-filled/50/000000/";

for (let i = 1; i <= battlesCount; i++) {
  const item = document.createElement("li");
  const newLink = document.createElement("a");
  newLink.href = `${i}/index.html`;
  newLink.target = `__blank`;
  const newImg = document.createElement("img");
  newImg.src = `${baseURL}${i}.png`;

  newLink.appendChild(newImg);
  item.appendChild(newLink);
  list.appendChild(item);
}
