let counterValue = 0;
const btnsContainerEl = document.getElementById("counter");
const counterEl = document.getElementById("value");
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
const decrementBtnEl = document.querySelector('button[data-action="decrement"]');

incrementBtnEl.addEventListener('click',()=>{
    counterValue++;
    counterEl.textContent=counterValue;
});
decrementBtnEl.addEventListener('click',()=>{
    counterValue--;
    counterEl.textContent=counterValue;
});