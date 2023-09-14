$(document).ready(function () {
  // const loadScript = (url) =>
  //   new Promise((resolve) => {
  //     const script = document.createElement('script');
  //     script.addEventListener('load', () => {
  //       resolve();
  //     });

  //     script.src = url;

  //     document.body.append(script);
  //   });

  // loadScript('https://www.youtube.com/iframe_api').then(() => {
  //   function onYouTubeIframeAPIReady() {
  //     YT.ready(() => {
  //       let player;
  //       function checkPosition() {
  //         var div_position = $('#video-placeholder').offset();
  //         var div_top = div_position.top;
  //         var div_left = div_position.left;
  //         var div_width = $('#video-placeholder').width();
  //         var div_height = $('#video-placeholder').height();
  //         var top_scroll = $(document).scrollTop();
  //         var left_scroll = $(document).scrollLeft();
  //         var screen_width = $(window).width();
  //         var screen_height = $(window).height() + 600;
  //         var see_x1 = left_scroll;
  //         var see_x2 = screen_width + left_scroll;
  //         var see_y1 = top_scroll;
  //         var see_y2 = screen_height + top_scroll;
  //         var div_x1 = div_left;
  //         var div_x2 = div_left + div_height;
  //         var div_y1 = div_top;
  //         var div_y2 = div_top + div_width;
  //         if (
  //           div_x1 >= see_x1 &&
  //           div_x2 <= see_x2 &&
  //           div_y1 >= see_y1 &&
  //           div_y2 <= see_y2
  //         ) {
  //           player.playVideo();
  //         } else {
  //           player.pauseVideo();
  //         }
  //       }

  //       player = new YT.Player('video-placeholder', {
  //         width: '100%',
  //         height: '100%', //размеры окна видео
  //         playerVars: {
  //           autoplay: 0,
  //           controls: 0,
  //           showinfo: 0,
  //           rel: 0,
  //           mute: 1,
  //         }, //тонкие настройки видеопроигрывателя
  //         videoId: 'WwQ73-SQ02U', //здесь id ролика
  //       });
  //       $(document).scroll(function () {
  //         checkPosition();
  //       });
  //       $(window).resize(function () {
  //         checkPosition();
  //       });
  //     });
  //   }

  //   onYouTubeIframeAPIReady();
  // });

  Fancybox.bind('[data-fancybox]', {
    // Your custom options
  });

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
      autoclear: false,
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
      loop: true,
      autoplay: {
        delay: 5000,
      },
      slidesPerView: 1,
      spaceBetween: 40,
      breakpoints: {
        1025: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2.2,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
        360: {
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
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
      slidesPerView: 2.4,
      spaceBetween: 40,
      breakpoints: {
        1025: {
          slidesPerView: 2.25,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 1.6,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 0.98,
          spaceBetween: 20,
        },
        360: {
          slidesPerView: 1.35,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
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
      slidesPerView: 1.9,
      spaceBetween: 40,
      breakpoints: {
        1025: {
          slidesPerView: 1.7,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 1.1,
          spaceBetween: 20,
        },
        360: {
          slidesPerView: 1.1,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
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
      slidesPerView: 1,
      spaceBetween: 40,
      breakpoints: {
        1025: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        360: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
  }
});
