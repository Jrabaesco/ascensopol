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
            { username: 'usuario530@only.com', password: 'pq8237327' },
            { username: 'usuario531@only.com', password: 'yw1582394' },
            { username: 'usuario532@only.com', password: 'us1982346' },
            { username: 'usuario533@only.com', password: 'le1872349' },
            { username: 'usuario534@only.com', password: 'jd1983759' },
            { username: 'usuario535@only.com', password: 'iw9138712' },
            { username: 'usuario536@only.com', password: 'ba1934619' },
            { username: 'usuario537@only.com', password: 'kt1847195' },
            { username: 'usuario538@only.com', password: 'ae2834729' },
            { username: 'usuario539@only.com', password: 'zq5910357' },
            { username: 'usuario540@only.com', password: 'je1084902' },
            { username: 'usuario541@only.com', password: 'ke9328237' },
            { username: 'usuario542@only.com', password: 'be9237642' },
            { username: 'usuario543@only.com', password: 'ks9234823' },
            { username: 'usuario544@only.com', password: 'ph2345337' },
            { username: 'usuario545@only.com', password: 'mn6344902' },
            { username: 'usuario546@only.com', password: 'sw9875902' },
            { username: 'usuario547@only.com', password: 'rt9384765' },
            { username: 'usuario548@only.com', password: 'uy6444902' },
            { username: 'usuario549@only.com', password: 'ls8123762' },
            { username: 'usuario550@only.com', password: 'wt8353673' },
            { username: 'usuario551@only.com', password: 'hj7364552' },
            { username: 'usuario552@only.com', password: 'jr5393482' },
            { username: 'usuario553@only.com', password: 'ha3454902' },
            { username: 'usuario554@only.com', password: 'cn8234902' },
            { username: 'usuario555@only.com', password: 'nx7634902' },
            { username: 'usuario556@only.com', password: 'mx8234902' },
            { username: 'usuario557@only.com', password: 'mj9234823' },
            { username: 'usuario558@only.com', password: 'zm9247232' },
            { username: 'usuario559@only.com', password: 'la9128731' },
            { username: 'usuario560@only.com', password: 'qm9837645' },
            { username: 'usuario561@only.com', password: 'ar1509923' },
            { username: 'usuario602@only.com', password: 'th2938385' },
            { username: 'usuario603@only.com', password: 'op2349820' },
            { username: 'usuario604@only.com', password: 'im2394875' },
            { username: 'usuario605@only.com', password: 'uy2928734' },
            { username: 'usuario606@only.com', password: 'pq2938473' },
            { username: 'usuario607@only.com', password: 'rs2349087' },
            { username: 'usuario608@only.com', password: 'ks2934874' },
            { username: 'usuario609@only.com', password: 'aw2934876' },
            { username: 'usuario610@only.com', password: 'qw1293864' },
            { username: 'usuario611@only.com', password: 'tt1293669' },
            { username: 'usuario612@only.com', password: 'mn3776292' },
            { username: 'usuario613@only.com', password: 'jd2384787' },
            { username: 'usuario614@only.com', password: 'si2394876' },
            { username: 'usuario615@only.com', password: 'di2398723' },
            { username: 'usuario616@only.com', password: 'we8238744' },
            { username: 'usuario617@only.com', password: 'sd2398753' },
            { username: 'usuario618@only.com', password: 'uw9293864' },
            { username: 'usuario619@only.com', password: 'ag2938238' },
            { username: 'usuario620@only.com', password: 'ws2398723' }
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
