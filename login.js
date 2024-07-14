document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const users = [
            { username: 'bazan', password: 'mocho' },
            { username: '949512596', password: '949512596' },
            { username: '906441253', password: '906441253' },
            { username: '960099454', password: '960099454' },
            { username: 'usuario520@only.com', password: 'ja1509520' },
            { username: 'usuario521@only.com', password: 'av2873135' },
            { username: 'usuario522@only.com', password: 'ta7466228' },
            { username: 'usuario523@only.com', password: 'av8376465' },
            { username: 'usuario524@only.com', password: 'ac7726948' },
            { username: 'usuario525@only.com', password: 'bk2342345' },
            { username: 'usuario526@only.com', password: 'jl8276462' },
            { username: 'usuario527@only.com', password: 'pl9128363' },
            { username: 'usuario528@only.com', password: 'oa9872346' },
            { username: 'usuario529@only.com', password: 'kj7823335' },
            { username: 'usuario530@only.com', password: 'pq8237327' }
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
