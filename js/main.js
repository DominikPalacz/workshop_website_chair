document.addEventListener("DOMContentLoaded", function () {
    console.log('DOM ok');

    var menuEl = document.getElementsByClassName('header-nav');
    console.warn(menuEl);

    for (var i = 0; i < menuEl.length; i++) {
        console.log(menuEl[i]);
        console.log(i)
    }


});