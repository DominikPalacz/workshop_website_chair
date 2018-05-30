document.addEventListener("DOMContentLoaded", function () {
    console.log('DOM ok');

    var menuEl = document.getElementsByClassName('header-menu');
    console.warn(menuEl);

    for (var i = 0; i < menuEl.length; i++) {
        console.log(menuEl[i]);
        console.log(i);

        menuEl[i].addEventListener('mouseover', function () {
            console.warn('mousover');


            var navUl = document.createElement('ul');

            var navLiA = document.createElement('li');
            var navLiN = document.createElement('li');
            var navLiH = document.createElement('li');

            navLiA.innerHTML = '<a href="#">Aktualności</a>';
            navLiN.innerHTML = '<a href="#">Nasz team</a>';
            navLiH.innerHTML = '<a href="#">Historia</a>';

            navUl.appendChild(navLiA);
            navUl.appendChild(navLiN);
            navUl.appendChild(navLiH);

            console.log(navUl);

            

            var oFirmie = document.getElementById()

        });


    }


});