document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper(".mySwiper", {
    direction: 'horizontal',
    loop: false,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

document.querySelector('#review-1').addEventListener('click', function () {
  document.querySelector('.popup').style.display = 'flex';
  document.querySelector('.blur').style.display = 'block';
})
document.querySelector('#review-2').addEventListener('click', function () {
  document.querySelector('.popup').style.display = 'flex';
  document.querySelector('.blur').style.display = 'block';
})
document.querySelector('#review-3').addEventListener('click', function () {
  document.querySelector('.popup').style.display = 'flex';
  document.querySelector('.blur').style.display = 'block';
})
document.querySelector('#review-4').addEventListener('click', function () {
  document.querySelector('.popup').style.display = 'flex';
  document.querySelector('.blur').style.display = 'block';
})

document.querySelector('#close').addEventListener('click', function () {
  document.querySelector('.popup').style.display = 'none';
  document.querySelector('.blur').style.display = 'none';

})
document.querySelector('#cancel').addEventListener('click', function () {
  document.querySelector('.popup').style.display = 'none';
  document.querySelector('.blur').style.display = 'none';

})

document.getElementById('modeToggle').addEventListener('change', function () {
  if (document.body.classList.contains('DarkMode')) {
      // If DarkMode is applied, remove it and add LightMode
      document.body.classList.remove('DarkMode');
      document.body.classList.add('LightMode');
  } else {
      // If LightMode is applied or no mode is applied, remove it and add DarkMode
      document.body.classList.remove('LightMode');
      document.body.classList.add('DarkMode');
  }
});
