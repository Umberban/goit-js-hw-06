const inputEl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');
addEventListener('input' ,() => {
    spanEl.style.fontSize = `${inputEl.value}px`;
    console.log(inputEl.value);
})