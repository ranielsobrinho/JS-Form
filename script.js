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

    if (nameValue === '') {
        setErrorFor(name, 'Name cannot be blank');
    } else{
        setSuccessFor(name);
    }
}

function setErrorFor(input, message){
    
}