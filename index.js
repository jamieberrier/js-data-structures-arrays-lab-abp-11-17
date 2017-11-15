// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name){
  const newLastDriver = drivers.slice();
  newLastDriver.push(name);
}
/*
function prependDriver(name){
  const newFirstDriver = [name, ...drivers];
}

function removeLastDriver(){
  const noLastDriver = drivers.slice(0, drivers.length - 1);

}

function removeFirstDriver(){
  const noFirstDriver = drivers.slice(1);
}
*/
