var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  kittens2 = [...kittens, name];
  return kittens2;
}

function prependKitten(name) {
  kittens2 = [name, ...kittens];
  return kittens2;
}


function removeLastKitten() {
  
}

function removeFirstKitten() {
  
}




