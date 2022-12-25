const formEl = document.querySelector('.login-form');
const loginInputEl = formEl.firstElementChild.firstElementChild;
const passwordInputEl = formEl.firstElementChild.nextElementSibling.firstElementChild;
formEl.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(loginInputEl.value==="" || passwordInputEl.value ===""){
    alert('Fill all fields');
    }
    const obj={};
    obj.name = loginInputEl.value;
    obj.password = passwordInputEl.value;
    formEl.reset();
    return console.log(obj);
})