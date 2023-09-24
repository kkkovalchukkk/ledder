$(document).ready(function () {
  const faviconTag = document.getElementById('faviconTag');
  const isDark = window.matchMedia('(prefers-color-scheme: dark)');
  const changeFavicon = () => {
    if (isDark.matches) faviconTag.href = './favicon-dark-theme.ico';
    else faviconTag.href = './favicon-light-theme.svg';
  };

  changeFavicon();
  setInterval(changeFavicon, 1000);

  Fancybox.bind('[data-fancybox]', {});

  const formBoxLabel = document.querySelectorAll('.form__box-label');

  if (formBoxLabel) {
    formBoxLabel.forEach((item) => {
      item.addEventListener('click', function () {
        formBoxLabel.forEach((item) => {
          item.classList.remove('form__box-label--checked');
        });
        this.classList.add('form__box-label--checked');
      });
    });
  }

  const gallerySlide = document.querySelectorAll('.interview__box');

  gallerySlide?.forEach((elem) => {
    const galleryImg = elem.querySelector('.interview__img');
    const galleryHidden =
      elem.querySelector('.interview__hidden')?.firstElementChild;
    galleryImg.addEventListener('click', () => {
      galleryHidden.click();
    });
  });

  const modalBoxLabel = document.querySelectorAll('.modal__box-label');
  modalBoxLabel.forEach((label) => {
    label.addEventListener('click', function () {
      modalBoxLabel.forEach((label) => {
        if (label.firstElementChild?.checked) {
          label.classList.remove('modal__box-label--checked');
        }
      });
      this.classList.add('modal__box-label--checked');
    });
  });

  const body = document.querySelector('body');
  const burger = document.querySelector('.burger');
  const close = document.querySelector('.menu__close');
  const menu = document.querySelector('.menu');
  const menuItem = document.querySelectorAll('.menu__item');

  if (burger) {
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.active').length) {
        burger.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('no-scroll');
      }
      e.stopPropagation();
    });

    menuItem.forEach((item) => {
      item.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.remove('active');
        body.classList.remove('no-scroll');
      });
    });

    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      menu.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });

    close.addEventListener('click', () => {
      burger.classList.toggle('active');
      menu.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });
  }

  if (document.querySelector('.form-input-tel')) {
    $('.form-input-tel').mask('+7 (999) 999-99-99', {
      autoclear: true,
    });
  }

  const lang = document.querySelector('.header__lang');
  lang.addEventListener('click', () => {
    if (lang.classList.contains('header__lang--active')) {
      lang.classList.remove('header__lang--active');
    } else {
      lang.classList.add('header__lang--active');
    }
  });

  const langNow = document.querySelector('.header__lang-now');
  const langBtn = document.querySelector('.header__lang-btn');

  langBtn.addEventListener('click', () => {
    const text = langNow.textContent;
    langNow.textContent = langBtn.textContent;
    langBtn.textContent = text;
  });

  const whyItemNum = document.querySelectorAll('.why__item-num');

  function elemLength(elem) {
    elem.forEach((span, index) => {
      index >= 9
        ? (span.textContent = `${index + 1}`)
        : (span.textContent = `0${index + 1}`);
    });
  }
  elemLength(whyItemNum);

  $('.questions__item').click(function () {
    $(this)
      .toggleClass('questions__item--active')
      .children()
      .eq(1)
      .slideToggle();
    $('.questions__item')
      .not(this)
      .removeClass('questions__item--active')
      .find('.questions__item-text')
      .slideUp();
  });

  $('.model__item').click(function () {
    $(this).toggleClass('model__item--active').children().eq(1).slideToggle();
    $('.model__item')
      .not(this)
      .removeClass('model__item--active')
      .find('.model__item-hidden')
      .slideUp();
  });

  $('.services__item').click(function () {
    $(this)
      .toggleClass('services__item--active')
      .children()
      .eq(1)
      .slideToggle();
    $('.services__item')
      .not(this)
      .removeClass('services__item--active')
      .find('.services__item-hidden')
      .slideUp();
  });

  $('.why__item').click(function () {
    if (innerWidth <= 480) {
      $(this).toggleClass('why__item--active').children().eq(1).slideToggle();
    }
  });

  var targetMap = document.querySelectorAll('[data-target]'),
    map = document.querySelectorAll('.tab__info');

  targetMap?.forEach((elem) => {
    elem.addEventListener('click', function (e) {
      e.preventDefault();
      var target = this.getAttribute('data-target');
      map.forEach((elem) => {
        elem.classList.remove('tab__info--opacity', 'tab__info--active');
      });
      targetMap.forEach((elem) => {
        elem.classList.remove('tab__target--active');
      });
      this.classList.add('tab__target--active');
      var cat = document.querySelector('[data-info="' + target + '"]');
      cat.classList.add('tab__info--active');
      setTimeout(() => {
        cat.classList.add('tab__info--opacity');
      }, 400);
    });
  });

  if (document.querySelector('.projects__swiper')) {
    const projectsSwiper = new Swiper('.projects__swiper', {
      navigation: {
        prevEl: '.projects__arrow-prev',
        nextEl: '.projects__arrow-next',
      },
      autoplay: {
        delay: 5000,
      },
      breakpoints: {
        1025: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        767: {
          slidesPerView: 1,
          spaceBetween: 20,
          grid: {
            rows: 2,
          },
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          grid: {
            rows: 2,
          },
        },
      },
    });
  }

  if (document.querySelector('.services__swiper')) {
    const servicesSwiper = new Swiper('.services__swiper', {
      navigation: {
        prevEl: '.services__arrow-prev',
        nextEl: '.services__arrow-next',
      },
      autoplay: {
        delay: 5000,
      },
      slidesPerView: 1,
      spaceBetween: 40,
    });
  }

  if (document.querySelector('.article__swiper')) {
    const articleSwiper = new Swiper('.article__swiper', {
      navigation: {
        prevEl: '.article__arrow-prev',
        nextEl: '.article__arrow-next',
      },
      autoplay: {
        delay: 5000,
      },
      slidesPerView: 'auto',
      spaceBetween: 40,
      breakpoints: {
        1025: {
          spaceBetween: 40,
        },
        768: {
          spaceBetween: 20,
        },
        480: {
          spaceBetween: 20,
        },
        360: {
          spaceBetween: 20,
        },
        320: {
          spaceBetween: 20,
        },
      },
    });
  }

  if (document.querySelector('.article__swiperTwo')) {
    const articleSwiperTwo = new Swiper('.article__swiperTwo', {
      navigation: {
        prevEl: '.article__arrow--prevTwo',
        nextEl: '.article__arrow--nextTwo',
      },
      autoplay: {
        delay: 5000,
      },
      slidesPerView: 'auto',

      spaceBetween: 40,
      breakpoints: {
        1025: {
          spaceBetween: 40,
        },
        768: {
          spaceBetween: 20,
        },
        480: {
          spaceBetween: 20,
        },
        360: {
          spaceBetween: 20,
        },
        320: {
          spaceBetween: 10,
        },
      },
    });
  }

  if (document.querySelector('.article__swiperThree')) {
    const articleSwiperThree = new Swiper('.article__swiperThree', {
      navigation: {
        prevEl: '.article__arrow--prevThree',
        nextEl: '.article__arrow--nextThree',
      },
      autoplay: {
        delay: 5000,
      },
      slidesPerView: 'auto',
      spaceBetween: 40,
      breakpoints: {
        1025: {
          spaceBetween: 40,
        },
        768: {
          spaceBetween: 20,
        },
        480: {
          spaceBetween: 20,
        },
        360: {
          spaceBetween: 20,
        },
        320: {
          spaceBetween: 20,
        },
      },
    });
  }

  if (document.querySelector('.article__swiperWidth')) {
    const articleSwiperTwo = new Swiper('.article__swiperWidth', {
      navigation: {
        prevEl: '.article__arrow-prevWidth',
        nextEl: '.article__arrow-nextWidth',
      },
      autoplay: {
        delay: 5000,
      },
      slidesPerView: 'auto',
      spaceBetween: 40,
      breakpoints: {
        1025: {
          spaceBetween: 40,
        },
        768: {
          spaceBetween: 20,
        },
        480: {
          spaceBetween: 20,
        },
        360: {
          spaceBetween: 20,
        },
        320: {
          spaceBetween: 20,
        },
      },
    });
  }
});
