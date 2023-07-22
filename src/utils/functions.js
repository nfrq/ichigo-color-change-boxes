function classNames(...names) {
  return names.filter((name) => name !== '').join(' ');
}

function randomColor(colors, size) {
  let availableColors = [...colors]
  let randomColors = [];

  for (let i = 0; i < size; i++) {
    let randomIndex = Math.floor(Math.random() * availableColors.length);
    randomColors[i] = availableColors[randomIndex];
    availableColors.splice(randomIndex, 1);
  }

  return randomColors;
}

export { classNames, randomColor };