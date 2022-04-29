export class FormValidator {
  constructor (obj, formSelector) {
    this._input = obj.input;
    this._submitButton = obj.submitButton;
    this._inactiveButtonClass = obj.inactiveButtonClass;
    this._inputErrorClass = obj.inputErrorClass;
    this._errorTextClass = obj.errorTextClass;
    this._formSelector = formSelector;
  }

  _showInputError = (formElement, inputElement, errorMessage, obj) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorTextClass);
  }

  _hideInputError = (formElement, inputElement, obj) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorTextClass);
    errorElement.textContent = " ";
  }
  
  _hasInvalidInput = (inputList) => {
    return inputList.some ( (inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _disableButtonElement = (buttonElement, obj) => {
    buttonElement.classList.add (this._inactiveButtonClass);
    buttonElement.disabled = true;
  }

  _activeButtonElement = (buttonElement, obj) => {
    buttonElement.classList.remove (this._inactiveButtonClass);
    buttonElement.disabled = false;
  }

  _toggleButtonState = (inputList, buttonElement, obj) => {
    if (this._hasInvalidInput(inputList)) {
      this._disableButtonElement(buttonElement, obj);
    } else {
      this._activeButtonElement(buttonElement, obj);
    }
  }

  _isValid = (formElement, inputElement, obj) => {
    if (!inputElement.validity.valid) {
      this._showInputError (formElement, inputElement, inputElement.validationMessage, obj);
    } else {
      this._hideInputError (formElement, inputElement, obj);
    }
  }

  _setEventListeners = (formElement, obj) => {
    const inputList = Array.from(formElement.querySelectorAll(this._input));
    const buttonElement = formElement.querySelector(this._submitButton);
    this._toggleButtonState (inputList, buttonElement, obj);
    inputList. forEach ( (inputElement) => {
      inputElement.addEventListener ('input', () => {
        this._isValid(formElement, inputElement, obj);
        this._toggleButtonState (inputList, buttonElement, obj);
      });
    });
  }

  enableValidation = (obj, formElement) => {
    this._formSelector.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });
    this._setEventListeners(formElement, obj);
  }
}


