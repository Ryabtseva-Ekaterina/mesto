import { openPopup } from "./index.js";

export class Card {
    constructor (name, link, cardSelector) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
    } 

    _getTemplate() {
        const cardElement = document
            .querySelector (this._cardSelector)
            .content
            .querySelector('.elements__card')
            .cloneNode(true);
        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._cardImage =  this._element.querySelector('.elements__card-image');
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name; 
        this._element.querySelector('.elements__card-title').textContent = this._name; 
        this._like = this._element.querySelector('.elements__card-like');
        this._setEventListeners();
        return this._element;
    }

    _setEventListeners() {
        this._like.addEventListener ('click', () => {
            this._likeCard();
        });

        this._element.querySelector('.elements__card-delete-button').addEventListener ('click', () => {
            this._deleteCard();
        });

        this._cardImage.addEventListener ('click', () => {
            this._openZoomPopup();
        });
    }

    _likeCard () {
        this._like.classList.toggle('elements__card-like-active');
    }

    _deleteCard() {
        this._element.remove();
        this._element = null;
    }

    _openZoomPopup () {
        document.querySelector('.zoom-popup__card').src = this._link;
        document.querySelector('.zoom-popup__card').alt = this._name;
        document.querySelector('.zoom-popup__card-title').textContent = this._name;
        openPopup (document.querySelector('.zoom-popup'));
    }
}