const formDon = document.querySelector('.login-main__content');
const inputEmail = formDon.querySelector('.login-main__rectangle_type_email');
const inputPassword = formDon.querySelector('.login-main__rectangle_type_password');
const invaliEmailPopup = formDon.querySelector('.popup_invalid_email')
//показывает попап
function showEmailError() {
  invaliEmailPopup.classList.add('.login-main__error_visible');
}
function hideEmailError() {
  invaliEmailPopup.classList.remove('.login-main__error_visible');
}


function checkInputValidity(input) {
    if (!input.validity.valid) {
        showEmailError(input)
    }
    else {
        hideEmailError(input)
    }
}


const inputList = Array.from(formDon.querySelectorAll('.login-main__rectangle'));

//функция проверяющая что есть хотя бы одно не валидное поле ввода
function hasInvalidInput() {
    return inputList.some((input) => {
      return !input.validity.valid;
    });
  }
  
  const buttonSelector = formDon.querySelector('.login-main__button');
//функция добавляющая кнопке сабмита статус неактивности если хотя бы одно поле не валидно
function toggleButtonState() {
    if (hasInvalidInput()) {
      buttonSelector.classList.add('login-main__button_disabled')
      buttonSelector.setAttribute('disabled', 'disabled')
    }
    else {
      buttonSelector.classList.remove('login-main__button_disabled')
      buttonSelector.removeAttribute('disabled', 'disabled')
    }
  }

  function setEventListeners() {
    toggleButtonState();
    inputList.forEach((input) => {
      input.addEventListener('input', function () {
      toggleButtonState();
      })
    })
    inputList.forEach((input) => {
      input.addEventListener('select', function () {
      })
    })

  }
  setEventListeners();

  const link = formDon.querySelector('.login-main__link');
  function golLink() {
      if (!buttonSelector.hasAttribute('disabled')) {
        link.setAttribute('href','/main-request-page.html')
      }
  }
  buttonSelector.addEventListener('click', golLink)