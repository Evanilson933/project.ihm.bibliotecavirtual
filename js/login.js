document.addEventListener('DOMContentLoaded', function() {
    const users = [
        { email: 'evanilson@gmail.com', password: '1234567' },
        { email: 'victor@gmail.com', password: '1234567' },
        { email: 'mbote@gmail.com', password: '1234567' }
    ];

    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            // Armazenar um token simulado no localStorage
            localStorage.setItem('authToken', 'fake-jwt-token');
            window.location.href = '../index.html'; // Redirecionar para a página inicial
        } else {
            document.getElementById('loginError').style.display = 'block';
        }
    });
});
