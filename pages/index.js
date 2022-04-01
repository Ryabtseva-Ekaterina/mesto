const editButton = document.querySelector('.profile__intro-edit-button');
const addButton = document.querySelector('.profile__add-button');
const editPopup = document.querySelector('.edit-popup');
const addPopup = document.querySelector('.add-popup');
const zoomPopup = document.querySelector('.zoom-popup');
const editCloseButton = document.querySelector('.edit-popup__close-button');
const addCloseButton = document.querySelector('.add-popup__close-button');
const zoomCloseButton = document.querySelector('.zoom-popup__close-button');
const formElementEdit = document.querySelector('.edit-popup__form');
const formElementAdd = document.querySelector('.add-popup__form');
let nameInput = document.querySelector('.popup__container-form-input_type_name');
let jobInput = document.querySelector('.popup__container-form-input_type_job');
let namePlaceInput = document.querySelector('.popup__container-form-input_type_name-place');
let urlPlaceInput = document.querySelector('.popup__container-form-input_type_url');
let nameValue = document.querySelector('.profile__intro-name');
let jobValue = document.querySelector('.profile__intro-description');
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
const elementsCards = document.querySelector('.elements__cards');
const cards = document.querySelector('#cards').content;


function closePopup() {
  editPopup.classList.remove('popup_opened');
  addPopup.classList.remove('popup_opened');
  zoomPopup.classList.remove('popup_opened');
}

function openEditPopup() {
  editPopup.classList.add('popup_opened');
  nameInput.value = nameValue.textContent;
  jobInput.value = jobValue.textContent;
}

function openAddPopup() {
  addPopup.classList.add('popup_opened');
}

function openZoomPopup () {
  zoomPopup.classList.add('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameValue.textContent = nameInput.value;
  jobValue.textContent = jobInput.value;
  closePopup();
}

const createPlaceCard = function (items) {
  const elementsCard = cards.querySelector('.elements__card').cloneNode(true);
  elementsCard.querySelector('.elements__card-image').src = items.link;
  elementsCard.querySelector('.elements__card-image').alt = items.name;
  elementsCard.querySelector('.elements__card-title').textContent = items.name;

  elementsCard.querySelector('.elements__card-like').addEventListener ('click', likeCard);

  elementsCard.querySelector('.elements__card-delete-button').addEventListener ('click', function (){
    elementsCard.remove();
  });

  elementsCard.querySelector('.elements__card-zoom-button').addEventListener ('click', function (){
    openZoomPopup ();
    zoomPopupCard.src = items.link;
    zoomPopupCard.alt = items.link;
    zoomPopupCardTitle.textContent = items.name;
  });

  return elementsCard;
};

const addCard = function (evt) {
  evt.preventDefault();
  const items = {};
  items.link = urlPlaceInput.value;
  items.name = namePlaceInput.value;
  addNewCards (items);
  closePopup();
  formElementAdd.reset();
};

const likeCard = function(evt) {
  evt.target.classList.toggle('elements__card-like-active');
};

const addNewCards = function(items) {
  elementsCards.prepend(createPlaceCard(items));
};

const cardsList = places.map (function (items) {
  return createPlaceCard(items);
});

elementsCards.append (...cardsList);
editCloseButton.addEventListener('click', closePopup);
addCloseButton.addEventListener('click', closePopup);
zoomCloseButton.addEventListener('click', closePopup);
editButton.addEventListener('click', openEditPopup);
addButton.addEventListener('click', openAddPopup);
formElementEdit.addEventListener('submit', formSubmitHandler);
formElementAdd.addEventListener('submit', addCard);