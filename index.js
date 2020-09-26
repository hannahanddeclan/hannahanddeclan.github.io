const thing = 'hibndib14';

const setError = (errorString) => {
    const errorNode = document.getElementById('error-message')
    const passwordInput = document.getElementById('password-input')
    errorNode.innerHTML = errorString
    errorNode.style.visibility = 'visible';
    passwordInput.classList.add('error')
}

const verifyPassword = (event) => {
    const password = document.getElementById('password-input').value
    if (password.length == 0) {
      setError('Password is empty')
    } else if (password != thing) {
      setError('Incorrect password')
    } else {
      sessionStorage.setItem('loggedIn', true)
      window.location.href = 'pages/homepage'
    }
  }