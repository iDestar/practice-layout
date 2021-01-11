(function () {
  const header = document.querySelector('header');
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add('header_active');
    } else {
      header.classList.remove('header_active');
    }
  };
})();

(function () {
  const headerNav = document.querySelector('.header__nav');
  const headerBurger = document.querySelector('.header__burger');
  const headerNavClose = document.querySelector('.header__nav-close');

  console.log(headerNavClose);

  headerBurger.addEventListener('click', function () {
    headerNav.classList.add('header__nav_active');
  });

  headerNavClose.addEventListener('click', function () {
    headerNav.classList.remove('header__nav_active');
  });
})();
