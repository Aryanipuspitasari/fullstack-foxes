const names = [
  "Andreas",
  "Aryani",
  "Daniel",
  "Expo",
  "Eugen",
  "Genti",
  "Horschi",
  "Hoanglong",
  "Isla",
  "Jacqueline",
  "Johann",
  "Maciej",
  "Thomas",
  "Michael",
  "Neda",
  "Niclas",
  "Stephan",
  "Sven",
];

function generateRandomName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  const randomName = names[randomIndex];
  document.getElementById("randomName").textContent = randomName;
}
