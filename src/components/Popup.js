export class Popup {
    constructor (popupSelector) {
        this._popupSelector = popupSelector;
    }

    openPopup () {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener ('keyup', this._handleEscClose);
    }

    closePopup() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener ('keyup', this._handleEscClose);
    }

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
          const popupOpened = document.querySelector('.popup_opened');
          this.closePopup(popupOpened);
        }
    }

    setEventListeners () {
        const closeButton = this._popupSelector.querySelector('.popup__close-button')
        closeButton.addEventListener('click', () => {
            this.closePopup();
        });
        this._popupSelector.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.closePopup(evt.target);
            }
        });
    }
}