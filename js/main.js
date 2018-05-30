document.addEventListener("DOMContentLoaded", function () {
    console.log('DOM ok');

    var menuEl = document.getElementsByClassName('header-menu');
    console.warn(menuEl);

    //for (var i = 0; i < menuEl.length; i++) {
    //    console.log(menuEl[i]);
    //    console.log(i);
    /*
        menuEl[2].addEventListener('click', function () {
            console.warn('mousover');

            var navUl = document.createElement('ul');
            navUl.classList.add('about');
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

            menuEl[2].appendChild(navUl);


        });

    */

    var hid = document.querySelectorAll('.text-in-left');
    console.log(hid);

    var center = document.querySelector('.center');
    center.addEventListener('mouseover', function () {
        hid[1].style.display = 'none';
    });

    var center = document.querySelector('.center');
    center.addEventListener('mouseout', function () {
        hid[1].style.display = 'block';
    });


    var left = document.querySelector('.left');
    left.addEventListener('mouseover', function () {
        hid[0].style.display = 'none';
    });

    var left = document.querySelector('.left');
    left.addEventListener('mouseout', function () {
        hid[0].style.display = 'block';
    });


});