var nameInput = document.getElementById('name')
var emailInput = document.getElementById('email')
var passwordInput = document.getElementById('password')
var form = document.querySelector('form')
var text = document.querySelector('.text')
var done = document.querySelector('.enter')
text.style.color = 'red'
done.style.color = 'green'
var allUsers = [];
if (localStorage.getItem('user') != null) {
    allUsers = JSON.parse(localStorage.getItem('user'))
}
function create() {
    if (validation(nameInput) && validation(emailInput) && validation(passwordInput)) {
        var user = {
            name: nameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
        }
        for (var i = 0; i < allUsers.length; i++) {
            if (allUsers[i].email === user.email) {
                text.innerHTML = 'email already exists'
                return;
            }
        }
        allUsers.push(user)
        localStorage.setItem('user', JSON.stringify(allUsers))
        done.innerHTML = 'success'
        clearInputs()
    }
    // console.log(user.name , user.email , user.password)
}

form.addEventListener('submit', function (e) {
    e.preventDefault()
    if (emailInput.value.length == 0 || nameInput.value.length == 0 || passwordInput.value.length == 0) {
        text.style.color = 'red';
        text.innerHTML = 'All inputs is required'
    }
    else {
        create()
    }
})
function clearInputs() {
    nameInput.value = null;
    emailInput.value = null;
    passwordInput.value = null;

}
function validation(element) {
    var text = element.value;
    var regex = {
        name: /^[a-zA-Z]{3,50}$/,
        email: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/,
        password: /^.{6,}$/
    }
    if (regex[element.id].test(text)) {
        return true;
    }
    else {
        return false;
    }
}