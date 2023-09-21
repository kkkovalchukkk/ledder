window.addEventListener('DOMContentLoaded', () => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const modalFormEl = document.querySelector('#modal-form');
  const middleFormEl = document.querySelector('#middle-form');
  const footerFormEl = document.querySelector('.footer__form');
  const modalNameInputEl = modalFormEl.querySelector('#modal-name-input');
  const modalEmailInputEl = modalFormEl.querySelector('#modal-email-input');
  const modalTelephoneInputEl = modalFormEl.querySelector('#modal-tel-input');
  const middleNameInputEl = middleFormEl?.querySelector('#modal-name-input');
  const middleEmailInputEl = middleFormEl?.querySelector('#modal-email-input');
  const middleTelephoneInputEl =
    middleFormEl?.querySelector('#modal-tel-input');

  const checkInputValidity = (input) => input.value;

  const submitFooterForm = (e) => {
    e.preventDefault();

    const nameInput = e.target.footer_form_name;
    const telInput = e.target.footer_form_tel;
    const emailInput = e.target.footer_form_email;
    [nameInput, telInput, emailInput].forEach((input) => {
      if (!checkInputValidity(input)) {
        input.classList.add('input--invalid');
        return;
      } else {
        input.classList.remove('input--invalid');
      }
    });

    if (nameInput.value.length < 2 || nameInput.value.length > 30) {
      nameInput.classList.add('input--invalid');
      return;
    } else {
      nameInput.classList.remove('input--invalid');
    }

    if (telInput.value.length != 18) {
      telInput.classList.add('input--invalid');
      return;
    } else {
      telInput.classList.remove('input--invalid');
    }

    if (!emailRegex.test(emailInput.value)) {
      emailInput.classList.add('input--invalid');
      return;
    } else {
      emailInput.classList.remove('input--invalid');
    }
    footerFormEl.submit();
  };

  const submitModalForm = (e) => {
    e.preventDefault();
    [modalNameInputEl, modalEmailInputEl, modalTelephoneInputEl].forEach(
      (input) => {
        if (!checkInputValidity(input)) {
          input.classList.add('input--invalid');
          return;
        } else {
          input.classList.remove('input--invalid');
        }
      }
    );

    if (
      modalNameInputEl.value.length < 2 ||
      modalNameInputEl.value.length > 30
    ) {
      modalNameInputEl.classList.add('input--invalid');
      return;
    } else {
      modalNameInputEl.classList.remove('input--invalid');
    }

    if (modalTelephoneInputEl.value.length != 18) {
      modalTelephoneInputEl.classList.add('input--invalid');
      return;
    } else {
      modalTelephoneInputEl.classList.remove('input--invalid');
    }

    if (!emailRegex.test(modalEmailInputEl.value)) {
      modalEmailInputEl.classList.add('input--invalid');
      return;
    } else {
      modalEmailInputEl.classList.remove('input--invalid');
    }
    modalFormEl.submit();
  };

  const submitMiddleForm = (e) => {
    e.preventDefault();
    [middleNameInputEl, middleEmailInputEl, middleTelephoneInputEl].forEach(
      (input) => {
        if (!checkInputValidity(input)) {
          input.classList.add('input--invalid');
          return;
        } else {
          input.classList.remove('input--invalid');
        }
      }
    );

    if (
      middleNameInputEl.value.length < 2 ||
      middleNameInputEl.value.length > 30
    ) {
      middleNameInputEl.classList.add('input--invalid');
      return;
    } else {
      middleNameInputEl.classList.remove('input--invalid');
    }

    if (middleTelephoneInputEl.value.length != 18) {
      middleTelephoneInputEl.classList.add('input--invalid');
      return;
    } else {
      middleTelephoneInputEl.classList.remove('input--invalid');
    }

    if (!emailRegex.test(middleEmailInputEl.value)) {
      middleEmailInputEl.classList.add('input--invalid');
      return;
    } else {
      middleEmailInputEl.classList.remove('input--invalid');
    }
    middleFormEl.submit();
  };

  document.querySelectorAll('.form-input-name').forEach((input) => {
    input.addEventListener('input', (event) => {
      if (event.target.value.length > 15) {
        event.target.value = event.target.value.slice(0, 15);
      }
      const inputValue = event.target.value;
      const regex = /^[a-zA-Zа-яА-Я]+$/;

      if (!regex.test(inputValue)) {
        event.target.value = inputValue.replace(/[^a-zA-Zа-яА-Я]+/g, '');
      }
      if (event.target.value.length < 2 || event.target.value.length > 30) {
        input.classList.add('input--invalid');
      } else {
        input.classList.remove('input--invalid');
      }
    });
  });

  document.querySelectorAll('.form-input-tel').forEach((input) => {
    input.addEventListener('keydown', (event) => {
      // Разрешенные клавиши: цифры, клавиши удаления (Backspace, Delete)
      const allowedKeys = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'Backspace',
        'Delete',
      ];

      // Разрешить нажатие разрешенных клавиш
      if (allowedKeys.includes(event.key)) {
        return;
      }

      // Предотвратить ввод остальных символов
      event.preventDefault();
    });
    input.addEventListener('input', () => {
      if (input.value.length != 18) {
        input.classList.add('input--invalid');
      } else {
        input.classList.remove('input--invalid');
      }
    });
  });

  document.querySelectorAll('.form-input-email').forEach((input) => {
    input.addEventListener('input', (event) => {
      const inputValue = event.target.value;
      if (!emailRegex.test(inputValue)) {
        input.classList.add('input--invalid');
      } else {
        input.classList.remove('input--invalid');
      }
    });
  });

  modalFormEl.addEventListener('submit', submitModalForm);
  footerFormEl.addEventListener('submit', submitFooterForm);

  if (middleFormEl) {
    middleFormEl.addEventListener('submit', submitMiddleForm);
  }
});
