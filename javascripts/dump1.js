const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []; 

document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = loginForm.email.value;
      const password = loginForm.password.value;
      authenticateUser(username, password);
    });
  }

  if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = registerForm.email.value;
      const password = registerForm.password.value;
      registerUser(username, password);
    });
  }
});

function authenticateUser(username, password) {
  for (const user of users) {
    if (user.username === username && user.password === password) {
      if (user.username == 'admin@gmail.com' && user.password === 'admin123') {
        alert('Admin login successful');
        window.location.href = 'admin.html';
      } else {
        alert('Login successful');
        window.location.href = 'client.html';
      }
      return;
    }
  }
  alert('Invalid username or password');
}

function registerUser(username, password) {
  users.push({ username, password });
  localStorage.setItem('users', JSON.stringify(users));
  console.log(users);
  alert('Registration successful');
  window.location.href = 'second.html';
}