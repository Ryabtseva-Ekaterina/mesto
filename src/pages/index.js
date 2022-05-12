import {FormValidator} from '../components/FormValidator.js';
import {Card} from '../components/Card.js';
import {Section} from '../components/Section.js';
import {Popup} from '../components/Popup.js';
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
functionZoomPopup.closePopup(zoomPopup);
functionZoomPopup.setEventListeners();

const createNewCard = function creatNewCard (data) {
  const card = new Card ({data,
    handleCardClick: (name, link) => {
      functionZoomPopup.openPopup(name, link);
    }
  },  '#cards');
  const cardElement = card.generateCard();
  return cardElement;
}

const creatCardFromArray = new Section ({
  data: places,
  renderer: (item) => {
    const cardFromArray = createNewCard (item);
    creatCardFromArray.addItem(cardFromArray);
  }
  }, elementsCardsContainer );
creatCardFromArray.renderItems();

const functionPopupAdd = new Popup (popupAdd);
functionPopupAdd.openPopup(popupAdd);
functionPopupAdd.closePopup(popupAdd);
functionPopupAdd.setEventListeners();

const functionPopupEdit = new Popup (popupEdit);
functionPopupEdit.openPopup(popupEdit);
functionPopupEdit.closePopup(popupEdit);
functionPopupEdit.setEventListeners();

const createUserInfo = new UserInfo (userInf);

function editProfile() {
  createUserInfo.getUserInfo();
  editProfileValidate.toggleButtonState();
  functionPopupEdit.openPopup(popupEdit);
}

const popupWithFormAdd = new PopupWithForm (
  { callbackSubmit: (data) => {
    data.link = urlPlaceInput.value;
    data.name = namePlaceInput.value;
    const cardFromPopup = createNewCard (data);
    elementsCardsContainer.prepend(cardFromPopup);
    functionPopupAdd.closePopup(popupAdd);
  }
}, popupAdd);
popupWithFormAdd.setEventListeners();

const popupWithFormEdit = new PopupWithForm (
   {callbackSubmit: (data) => {
    createUserInfo.setUserInfo(data);
    functionPopupEdit.closePopup(popupEdit);
   }}, popupEdit);
popupWithFormEdit.setEventListeners();

profileEditButton.addEventListener('click', () => {
  editProfile () ;
});

profileAddButton.addEventListener('click', () => {
  popupWithFormAdd.closePopup();
  addProfileValidate.toggleButtonState();
  functionPopupAdd.openPopup(popupAdd);
});


const editProfileValidate = new FormValidator (formElementList, formElementEdit);
editProfileValidate.enableValidation();

const addProfileValidate = new FormValidator (formElementList, formElementAdd);
addProfileValidate.enableValidation();