var head = document.querySelector('h1')
var username = localStorage.getItem('username')
var logBtn = document.getElementById('close')
if (username) {
    head.innerHTML = `welcome ${username}`
}


function logout() {
    window.location.href = 'index.html'
}

logBtn.addEventListener('click', function () {
    localStorage.removeItem('username')
    logout()

})