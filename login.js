const form = document.getElementById('login-form');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login validation (replace with your actual logic)
    if (username === 'Demo' && password === 'demo') {
        
        window.location.href = "https://moralweb.github.io/moralweb";
    }else {
        message.textContent = 'Churi korte aiso beda ?';
    }
});
