const thing = 'hibndib14';

const setError = (errorString) => {
    const errorNode = document.getElementById('error-message')
    errorNode.innerHTML = errorString
    errorNode.style.visibility = 'visible';
}

const verifyPassword = (event) => {
    const password = document.getElementById('password-input').value
    if (password.length == 0) {
      setError('enter a password')
    } else if (password != thing) {
      setError('password is incorrect')
    } else {
      sessionStorage.setItem('loggedIn', true)
      window.location.href = 'homepage'
    }
  }