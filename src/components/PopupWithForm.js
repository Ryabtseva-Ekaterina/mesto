import {Popup} from './Popup.js';


export class PopupWithForm extends Popup {
    constructor ({ callbackSubmit }, popupSelector) {
        super (popupSelector);
        this._callbackSubmit = callbackSubmit;

        this._formElement = this._popupSelector.querySelector('.popup__container-form');
    }
1   
    _getInputValues () {
        this._inputList = this._formElement.querySelectorAll('.popup__container-form-input');
        this._formValues = {};
        this._inputList.forEach (input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners () {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callbackSubmit (this._getInputValues());
        });
        super.setEventListeners();
    }

    closePopup() {
        this._formElement.reset();
        super.closePopup();
    }
}   
