import { openPopup } from "./index.js";

export class Card {
    constructor (name, link) {
        this._name = name;
        this._link = link;
    } 

    _getTemplate() {
        const cardElement = document
            .querySelector ('#cards')
            .content
            .querySelector('.elements__card')
            .cloneNode(true);
        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.elements__card-image').src = this._link;
        this._element.querySelector('.elements__card-title').textContent = this._name; 
        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.elements__card-like').addEventListener ('click', () => {
            this._likeCard();
        });

        this._element.querySelector('.elements__card-delete-button').addEventListener ('click', () => {
            this._deleteCard();
        });

        this._element.querySelector('.elements__card-image').addEventListener ('click', () => {
            this._openZoomPopup();
        });
    }

    _likeCard () {
        this._element.querySelector('.elements__card-like').classList.toggle('elements__card-like-active');
    }

    _deleteCard() {
        this._element.remove();
    }

    _openZoomPopup () {
        document.querySelector('.zoom-popup__card').src = this._link;
        document.querySelector('.zoom-popup__card').alt = this._link;
        document.querySelector('.zoom-popup__card-title').textContent = this._name;
        openPopup (document.querySelector('.zoom-popup'));
    }
}