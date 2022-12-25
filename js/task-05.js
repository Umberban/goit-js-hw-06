const inputEl = document.getElementById('name-input');
const textEl = document.getElementById('name-output');
const standartText = textEl.textContent;
inputEl.addEventListener('input',()=>{
    if(inputEl.value.trim()!==""){
    textEl.textContent = inputEl.value;}else{textEl.textContent=standartText};
})