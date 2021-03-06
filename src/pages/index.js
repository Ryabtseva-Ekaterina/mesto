import './index.css';
import {FormValidator} from '../components/FormValidator.js';
import {Card} from '../components/Card.js';
import {Section} from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api';
import {
  profileEditButton,
  profileAddButton,
  formElementEdit,
  formElementAdd,
  formElementEditAvatar,
  formElementList,
  userInf,
  nameInput,
  jobInput
} from '../utils/constants.js';
import { PopupDeleteImage } from '../components/PopupDeleteImage';

let userId;

const createUserInfo = new UserInfo (userInf);

const api = new Api ({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-42',
    headers: {
      authorization: '9cb90cfb-8967-42d4-ab64-1c7ec7e3930d',
      'Content-Type': 'application/json'
    } 
});

const allInfo = [api.getProfileInfo(), api.getCards()];

Promise.all ( allInfo )
  .then(([userStats, data]) => {
    createUserInfo.setUserInfo(userStats);
    userId = userStats._id;
    creatCard.renderItems(data);
  })
  .catch ((err) => {
    console.log (err);
})

const functionZoomPopup = new PopupWithImage ('.zoom-popup');
functionZoomPopup.setEventListeners();

const deletePopup = new PopupDeleteImage (
  {
  callbackSubmit: (data, element, id) => {
    api.deleteCard (data, id)
      .then ((data) => {
        element.remove();
        deletePopup.close();
      })
      .catch ((err) => {
         console.log (err);
      })
  }}, 
'.delete-popup');
deletePopup.setEventListeners();

const createNewCard = function creatNewCard (data) {
  const card = new Card ({data,
    handleCardClick: (name, link) => {
      functionZoomPopup.open(name, link);
    },
    deleteCardPopup: (cardElement, id) => {
      deletePopup.open(cardElement, id);
    },
    likeCards: (cardElement, id) => {
      api.likeCard (cardElement, id)
        .then ((data) => {
          cardElement.querySelector('.elements__card-like-button').classList.add('elements__card-like-button-active');
          cardElement.querySelector('.elements__card-like-counter').textContent = data.likes.length;
        })
        .catch ((err) => {
          console.log (err);
       })
    },
    disLikeCards: (cardElement, id) => {
      api.disLikeCard (cardElement, id)
        .then ((data) => {
          cardElement.querySelector('.elements__card-like-button').classList.remove('elements__card-like-button-active');
          cardElement.querySelector('.elements__card-like-counter').textContent = data.likes.length;
        })
        .catch ((err) => {
          console.log (err);
       })
    }}, userId,  '#cards');
  const cardElement = card.generateCard();
  return cardElement;
}

const creatCard = new Section ({
  renderer: (item) => {
    const cardFromWeb = createNewCard (item);
    creatCard.addItem(cardFromWeb);
  }
}, '.elements__cards');

function editProfile() {
  const profileData = createUserInfo.getUserInfo();
  nameInput.value = profileData.name;
  jobInput.value = profileData.about;
  editProfileValidate.resetValidation();
  popupWithFormEdit.open();
}

const popupWithFormAdd = new PopupWithForm (
  { callbackSubmit: (data) => {
    popupWithFormAdd.renderLoading (true);
    api.createNewCard(data)
      .then((data) => {
        const cardFromPopup = createNewCard (data);
        creatCard.addItem(cardFromPopup);
        popupWithFormAdd.close();
      })
      .catch ((err) => {
        console.log (err);
      })
      .finally (() => {
        popupWithFormAdd.renderLoading(false);
      });
  }
}, '.add-popup');
popupWithFormAdd.setEventListeners();

const popupWithFormEdit = new PopupWithForm (
   {callbackSubmit: (data) => { 
    popupWithFormEdit.renderLoading (true);
     api.updateUserInfo(data)
     .then((data) => {
      createUserInfo.setUserInfo(data);
      popupWithFormEdit.close();
    })
    .catch ((err) => {
      console.log (err);
    })
    .finally (() => {
      popupWithFormEdit.renderLoading(false);
    });
   }}, '.edit-popup');
popupWithFormEdit.setEventListeners();

profileEditButton.addEventListener('click', () => {
  editProfile () ;
});

profileAddButton.addEventListener('click', () => {
  addProfileValidate.resetValidation();
  popupWithFormAdd.open();
});

const editAvatarPopup = new PopupWithForm (
  {callbackSubmit: (data) => {
    editAvatarPopup.renderLoading (true);
    api.updateUserAvatar(data)
    .then((data) => {
      document.querySelector(userInf.avatarSelector).src = data.avatar;
      editAvatarPopup.close();
   })
   .catch ((err) => {
     console.log (err);
   })
   .finally (() => {
    editAvatarPopup.renderLoading(false);
  });
  }}, '.edit-avatar-popup');
editAvatarPopup.setEventListeners();

const editProfileValidate = new FormValidator (formElementList, formElementEdit);
editProfileValidate.enableValidation();

const addProfileValidate = new FormValidator (formElementList, formElementAdd);
addProfileValidate.enableValidation();

const editAvatarValidate = new FormValidator (formElementList, formElementEditAvatar);
editAvatarValidate.enableValidation();

document.querySelector('.profile__avatar-button').addEventListener('click', () => {
  editAvatarValidate.resetValidation();
  editAvatarPopup.open();
});
