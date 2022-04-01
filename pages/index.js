const profileEditButton = document.querySelector('.profile__intro-edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.edit-popup');
const popupAdd = document.querySelector('.add-popup');
const zoomPopup = document.querySelector('.zoom-popup');
const buttonEditPopupClose = document.querySelector('.edit-popup__close-button');
const buttonAddPopupClose = document.querySelector('.add-popup__close-button');
const zoomCloseButton = document.querySelector('.zoom-popup__close-button');
const formElementEdit = document.querySelector('.edit-popup__form');
const formElementAdd = document.querySelector('.add-popup__form');
const nameInput = document.querySelector('.popup__container-form-input_type_name');
const jobInput = document.querySelector('.popup__container-form-input_type_job');
const namePlaceInput = document.querySelector('.popup__container-form-input_type_name-place');
const urlPlaceInput = document.querySelector('.popup__container-form-input_type_url');
const nameValue = document.querySelector('.profile__intro-name');
const jobValue = document.querySelector('.profile__intro-description');
const zoomPopupCard = document.querySelector('.zoom-popup__card');
const zoomPopupCardTitle = document.querySelector('.zoom-popup__card-title');
const places = [
  {
    name: 'Севастополь',
    link: 'https://cdn.pixabay.com/photo/2020/06/06/20/37/crimea-5268092_960_720.jpg'
  },
  {
    name: 'Ялта',
    link: 'https://cdn.pixabay.com/photo/2019/05/26/21/16/yalta-4231265_1280.jpg'
  },
  {
    name: 'Судак',
    link: 'https://cdn.pixabay.com/photo/2020/04/04/21/12/crimea-5003884_960_720.jpg'
  },
  {
    name: 'Бахчисарай',
    link: 'https://cdn.pixabay.com/photo/2015/01/22/18/39/ukraine-608153_960_720.jpg'
  },
  {
    name: 'Балаклава',
    link: 'https://images.pexels.com/photos/8768334/pexels-photo-8768334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    name: 'Евпатория',
    link: 'https://sun9-84.userapi.com/sun9-40/impf/30OqZrOa5x9U64_EARl8wpMje6hN2FMmj8JzeA/XBtWIQYdCQA.jpg?size=1280x960&quality=96&sign=174c8e3e147275ec257eaf51b9d06c8a&type=album'
  }
];
const elementsCardsContainer = document.querySelector('.elements__cards');
const cards = document.querySelector('#cards').content;


function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function editProfile() {
  nameInput.value = nameValue.textContent;
  jobInput.value = jobValue.textContent;
  openPopup(popupEdit);
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameValue.textContent = nameInput.value;
  jobValue.textContent = jobInput.value;
  closePopup(popupEdit);
}

const createPlaceCard = function (items) {
  const elementsCard = cards.querySelector('.elements__card').cloneNode(true);
  const cardImage =  elementsCard.querySelector('.elements__card-image');
  cardImage.src = items.link;
  cardImage.alt = items.name;
  elementsCard.querySelector('.elements__card-title').textContent = items.name;

  elementsCard.querySelector('.elements__card-like').addEventListener ('click', likeCard);

  elementsCard.querySelector('.elements__card-delete-button').addEventListener ('click', function (){
    elementsCard.remove();
  });

  elementsCard.querySelector('.elements__card-zoom-button').addEventListener ('click', function (){
    zoomPopupCard.src = items.link;
    zoomPopupCard.alt = items.link;
    zoomPopupCardTitle.textContent = items.name;
    openPopup (zoomPopup);
  });

  return elementsCard;
};

const addCard = function (evt) {
  evt.preventDefault();
  const items = {};
  items.link = urlPlaceInput.value;
  items.name = namePlaceInput.value;
  addNewCards (items);
  closePopup(popupAdd);
  formElementAdd.reset();
};

const likeCard = function(evt) {
  evt.target.classList.toggle('elements__card-like-active');
};

const addNewCards = function(items) {
  elementsCardsContainer.prepend(createPlaceCard(items));
};

const cardsList = places.map (function (items) {
  return createPlaceCard(items);
});

elementsCardsContainer.append (...cardsList);
buttonEditPopupClose.addEventListener('click', function () {
  closePopup(popupEdit);
});

buttonAddPopupClose.addEventListener('click', function () {
  closePopup(popupAdd);
});
zoomCloseButton.addEventListener('click', function () {
  closePopup(zoomPopup);
});
profileEditButton.addEventListener('click', editProfile);
profileAddButton.addEventListener('click', function () {
  openPopup (popupAdd);
});
formElementEdit.addEventListener('submit', formSubmitHandler);
formElementAdd.addEventListener('submit', addCard);