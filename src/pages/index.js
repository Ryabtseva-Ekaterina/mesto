import './index.css';
import {FormValidator} from '../components/FormValidator.js';
import {Card} from '../components/Card.js';
import {Section} from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import {
  profileEditButton,
  profileAddButton,
  popupEdit,
  popupAdd,
  zoomPopup,
  formElementEdit,
  formElementAdd,
  namePlaceInput,
  urlPlaceInput,
  places,
  elementsCardsContainer,
  formElementList,
  userInf
} from '../utils/constants.js';


const functionZoomPopup = new PopupWithImage (zoomPopup);
functionZoomPopup.setEventListeners();

const createNewCard = function creatNewCard (data) {
  const card = new Card ({data,
    handleCardClick: (cardname, link) => {
      functionZoomPopup.open(cardname, link);
    }
  },  '#cards');
  const cardElement = card.generateCard();
  return cardElement;
}

const creatCard = new Section ({
  data: places,
  renderer: (item) => {
    const cardFromArray = createNewCard (item);
    creatCard.addItem(cardFromArray);
  }
  }, elementsCardsContainer );
creatCard.renderItems();

const createUserInfo = new UserInfo (userInf);

function editProfile() {
  createUserInfo.getUserInfo();
  editProfileValidate.toggleButtonState();
  popupWithFormEdit.open();
}

const popupWithFormAdd = new PopupWithForm (
  { callbackSubmit: (data) => {
    const cardFromPopup = createNewCard (data);
    creatCard.addItem(cardFromPopup);
    popupWithFormAdd.close();
  }
}, popupAdd);
popupWithFormAdd.setEventListeners();

const popupWithFormEdit = new PopupWithForm (
   {callbackSubmit: (data) => {
    createUserInfo.setUserInfo(data);
    popupWithFormEdit.close();
   }}, popupEdit);
popupWithFormEdit.setEventListeners();

profileEditButton.addEventListener('click', () => {
  editProfile () ;
});

profileAddButton.addEventListener('click', () => {
  addProfileValidate.toggleButtonState();
  popupWithFormAdd.open();
});


const editProfileValidate = new FormValidator (formElementList, formElementEdit);
editProfileValidate.enableValidation();

const addProfileValidate = new FormValidator (formElementList, formElementAdd);
addProfileValidate.enableValidation();