const form = document.getElementById('myForm');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    //values of the inputs
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(nameValue === '') {
        //show error
        //add error class
        setErrorFor(name, 'Name cannot be blank');
    } else{
        //add succes class
        setSuccessFor(name);
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    small.innerText = message; // add error message inside small

    formControl.className = 'form-control error'; //add error class
}