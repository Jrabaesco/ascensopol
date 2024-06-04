document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const users = [
            { username: 'usuario1', password: 'contraseña1' },
            { username: 'usuario2', password: 'contraseña2' },
            { username: 'usuario3', password: 'contraseña3' },
            { username: '960099454', password: '960099454' }
        ];

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            document.getElementById('login').style.display = 'none';
            document.getElementById('quiz-selection').style.display = 'block';
        } else {
            document.getElementById('loginError').style.display = 'block';
        }
    });
});
