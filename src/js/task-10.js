function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const formEl = document.getElementById('controls');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const createBtnEl = document.querySelector('button[data-create]');
const containerEl = document.getElementById('boxes');
function createBoxes(amount) {
  let collectionArr =[];
  let sizeProperty = 30;
  for (let index = 0; index < amount; index++) {
    const collectionEl = document.createElement('div');
    collectionEl.style.backgroundColor = getRandomHexColor();
    collectionEl.style.width = `${sizeProperty}px`;
    collectionEl.style.height = `${sizeProperty}px`;
    collectionArr.push(collectionEl);
    sizeProperty +=10;
  }
  containerEl.append(...collectionArr);
}
// containerEl.children[0].remove();
// console.log(containerEl.children);
function destroyBoxes(){
  containerEl.innerHTML='';
}
createBtnEl.addEventListener('click',()=>{
  let amount = formEl.firstElementChild.value;
  createBoxes(amount);
});
destroyBtnEl.addEventListener('click',  destroyBoxes);