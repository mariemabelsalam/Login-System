var emailInput = document.getElementById('email')
var passwordInput = document.getElementById('password')

var text = document.querySelector('p')
text.style.color = 'red';
var form = document.querySelector('form')
// console.log(form , emailInput , passwordInput)

form.addEventListener('submit', function (e) {
    e.preventDefault()
    if (emailInput.value.length == 0 || passwordInput.value.length == 0) {

        text.innerHTML = 'All inputs is required'
    }
    else {
        login()
    }
})

function login() {
    var allUsers = JSON.parse(localStorage.getItem('user')) || []
    var flag = false;
    for (var i = 0; i < allUsers.length; i++) {
        if (emailInput.value == allUsers[i].email && passwordInput.value == allUsers[i].password) {
            localStorage.setItem('username', allUsers[i].name)
            window.location.href = 'home.html'
            flag = true;
        }
    }
    if (flag == false) {
        text.innerHTML = 'incorrect email or password'
    }
}