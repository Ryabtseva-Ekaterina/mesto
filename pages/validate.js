const showInputError = (formElement, inputElement, errorMessage, obj) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(obj.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(obj.errorTextClass);
}

const hideInputError = (formElement, inputElement, obj) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(obj.inputErrorClass);
  errorElement.classList.remove(obj.errorTextClass);
  errorElement.textContent =" ";
}

const hasInvalidInput = (inputList) => {
  return inputList.some ((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const disableButtonElement = (buttonElement, obj) => {
  buttonElement.classList.add(obj.inactiveButtonClass);
  buttonElement.disabled = true;
}

const activeButtonElement = (buttonElement, obj) => {
  buttonElement.classList.remove(obj.inactiveButtonClass);
  buttonElement.disabled = false;
}

const toggleButtonState = (inputList, buttonElement, obj) => {
  if (hasInvalidInput(inputList)) {
    disableButtonElement(buttonElement, obj);
  } else {
    activeButtonElement(buttonElement, obj);
  }
}

const isValid = (formElement, inputElement, obj) => {
  if (!inputElement.validity.valid) {
    showInputError (formElement, inputElement, inputElement.validationMessage, obj);
  } else {
    hideInputError (formElement, inputElement, obj);
  }
};

const setEventListeners = (formElement, obj) => {
  const inputList = Array.from(formElement.querySelectorAll (obj.inputSelector));
  const buttonElement = formElement.querySelector(obj.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, obj);
  inputList.forEach ((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, obj);
      toggleButtonState(inputList, buttonElement, obj);
    });
  });
};

const enableValidation = (obj) => {
  const formList = Array.from(document.querySelectorAll(obj.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  setEventListeners(formElement, obj);
  });
}

enableValidation({
  formSelector: '.popup__container-form',
  inputSelector: '.popup__container-form-input',
  submitButtonSelector: '.popup__container-form-button',
  inactiveButtonClass: 'popup__container-form-button_inactive',
  inputErrorClass: 'popup__container-form-input_error',
  errorTextClass: 'popup__container-form-input-text_error'
});