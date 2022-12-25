const inputEl = document.getElementById('validation-input');
inputEl.addEventListener('blur',()=>{
    inputEl.classList.remove('invalid','valid')
    if(inputEl.value.length===Number(inputEl.dataset.length)){
        inputEl.classList.add('valid')
    }else{inputEl.classList.add('invalid')}
})

