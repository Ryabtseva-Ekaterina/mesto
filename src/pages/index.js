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
  formElementEdit,
  formElementAdd,
  places,
  formElementList,
  userInf,
  nameInput,
  jobInput
} from '../utils/constants.js';


const functionZoomPopup = new PopupWithImage ('.zoom-popup');
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
  }, '.elements__cards');
creatCard.renderItems();

const createUserInfo = new UserInfo (userInf);

function editProfile() {
  const profileData = createUserInfo.getUserInfo();
  nameInput.value = profileData.username;
  jobInput.value = profileData.job;
  editProfileValidate.resetValidation();
  popupWithFormEdit.open();
}

const popupWithFormAdd = new PopupWithForm (
  { callbackSubmit: (data) => {
    const cardFromPopup = createNewCard (data);
    creatCard.addItem(cardFromPopup);
    popupWithFormAdd.close();
  }
}, '.add-popup');
popupWithFormAdd.setEventListeners();

const popupWithFormEdit = new PopupWithForm (
   {callbackSubmit: (data) => {
    createUserInfo.setUserInfo(data);
    popupWithFormEdit.close();
   }}, '.edit-popup');
popupWithFormEdit.setEventListeners();

profileEditButton.addEventListener('click', () => {
  editProfile () ;
});

profileAddButton.addEventListener('click', () => {
  addProfileValidate.resetValidation();
  popupWithFormAdd.open();
});


const editProfileValidate = new FormValidator (formElementList, formElementEdit);
editProfileValidate.enableValidation();

const addProfileValidate = new FormValidator (formElementList, formElementAdd);
addProfileValidate.enableValidation();