import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
    constructor (popupSelector) {
        super (popupSelector);
        this._image = document.querySelector('.zoom-popup__card');
    }

    openPopup (name, link) {
        this._image.src = link;
        this._image.alt = name;
        document.querySelector('.zoom-popup__card-title').textContent = name;
        super.openPopup();
    }
}