const loginForm = document.getElementById('loginForm');
let userdic = {};

if (loginForm) {
  if (localStorage.getItem('userdic')) {
    userdic = JSON.parse(localStorage.getItem('userdic'));
  }

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (emailInput && passwordInput) {
      const key = emailInput.value.toLowerCase();
      const value = passwordInput.value;

      userdic[key] = value;

      emailInput.value = '';
      passwordInput.value = '';

      localStorage.setItem('userdic', JSON.stringify(userdic));

      console.log('User dictionary:', userdic);


      
    } else {
      console.error('Email or password input elements not found.');
    }
  });
} else {
  console.error('Element with ID "loginForm" not found.');
}
