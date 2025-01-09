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
            { username: 'estudioestrategicopolicial@only.com', password: 'A12345678' },
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
            { username: 'usuario602@only.com', password: 'Rafaela11.' },
            { username: 'usuario603@only.com', password: 'op2349820' },
            { username: 'usuario604@only.com', password: 'im2394875' },
            { username: 'usuario605@only.com', password: 'uy2928734' },
            { username: 'usuario606@only.com', password: 'pq2938473' },
            { username: 'usuario607@only.com', password: 'rs2349087' },
            { username: 'usuario608@only.com', password: 'ks2934874' },
            { username: 'usuario609@only.com', password: '123456' },
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
            { username: 'usuario620@only.com', password: 'ws2398723' },
            { username: 'usuario621@only.com', password: 'kw2982375' },
            { username: 'usuario622@only.com', password: 'lp0298237' },
            { username: 'usuario623@only.com', password: 'as8172542' },
            { username: 'usuario624@only.com', password: 'hg1234818' },
            { username: 'usuario625@only.com', password: 'ag1231238' },
            { username: 'usuario626@only.com', password: 'jh1231498' },
            { username: 'usuario627@only.com', password: 'ps1879675' },
            { username: 'usuario628@only.com', password: 're2131562' },
            { username: 'usuario629@only.com', password: 'ls1983761' },
            { username: 'usuario630@only.com', password: 'js1276499' },
            { username: 'usuario631@only.com', password: 'du2937740' },
            { username: 'usuario632@only.com', password: 'po3987236' },
            { username: 'usuario633@only.com', password: 'iu2387664' },
            { username: 'usuario634@only.com', password: 'du2728376' },
            { username: 'usuario635@only.com', password: 'sy3297642' },
            { username: 'usuario636@only.com', password: 'wj9277364' },
            { username: 'usuario637@only.com', password: 'nm2374892' },
            { username: 'usuario638@only.com', password: 'qt3736528' },
            { username: 'usuario649@only.com', password: 'dh2377489' },
            { username: 'usuario640@only.com', password: 'Arequipa1988' },
            { username: 'usuario651@only.com', password: 'eh2938745' },
            { username: 'usuario652@only.com', password: 'kj9283737' },
            { username: 'usuario653@only.com', password: 'qw9127642' },
            { username: 'usuario654@only.com', password: 'xx1287465' },
            { username: 'usuario655@only.com', password: 'gf1872641' },
            { username: 'usuario656@only.com', password: 'tr2983765' },
            { username: 'usuario657@only.com', password: 'rt2983619' },
            { username: 'usuario658@only.com', password: 'sj2976472' },
            { username: 'usuario659@only.com', password: 'dh1973641' },
            { username: 'usuario661@only.com', password: 'td9172653' },
            { username: 'usuario662@only.com', password: 'yy1927681' },
            { username: 'usuario663@only.com', password: 'qt1297631' },
            { username: 'usuario664@only.com', password: 'wy9128764' },
            { username: 'usuario665@only.com', password: 'gt1287466' },
            { username: 'usuario666@only.com', password: 'hh9172664' },
            { username: 'usuario667@only.com', password: 'uu2972365' },
            { username: 'usuario668@only.com', password: 'pe2937927' },
            { username: 'usuario669@only.com', password: 'ty2087264' },
            { username: 'usuario670@only.com', password: 'po4587264' },
            { username: 'usuario671@only.com', password: 'rt1358364' },
            { username: 'usuario672@only.com', password: 'hg4569872' },
            { username: 'usuario673@only.com', password: 'ls6548975' },
            { username: 'usuario674@only.com', password: 'bv8976315' },
            { username: 'usuario675@only.com', password: 'ss3216897' },
            { username: 'usuario676@only.com', password: 'hh2356664' },
            { username: 'usuario677@only.com', password: 'jt2938745' },
            { username: 'usuario678@only.com', password: 'cv2983476' },
            { username: 'usuario679@only.com', password: 'dv2398467' },
            { username: 'usuario680@only.com', password: 'po3567264' },
            { username: 'usuario681@only.com', password: 'rt3568364' },
            { username: 'usuario682@only.com', password: 'hg3569872' },
            { username: 'usuario683@only.com', password: 'ls3568975' },
            { username: 'usuario684@only.com', password: 'bv3566315' },
            { username: 'usuario685@only.com', password: 'ss3566897' },
            { username: 'usuario686@only.com', password: 'hh2356664' },
            { username: 'usuario687@only.com', password: 'jt2356745' },
            { username: 'usuario688@only.com', password: 'cv2356476' },
            { username: 'usuario689@only.com', password: 'dv2356467' }  
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
