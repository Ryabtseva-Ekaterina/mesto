export const profileEditButton = document.querySelector('.profile__intro-edit-button');
export const profileAddButton = document.querySelector('.profile__add-button');
export const popup = document.querySelector('.popup');
export const popupEdit = document.querySelector('.edit-popup');
export const popupAdd = document.querySelector('.add-popup');
export const zoomPopup = document.querySelector('.zoom-popup');
export const formElementEdit = document.querySelector('.edit-popup__form');
export const formElementAdd = document.querySelector('.add-popup__form');
export const userInf = {
    nameValue: document.querySelector('.profile__intro-name'),
    jobValue: document.querySelector('.profile__intro-description')
}
export const nameInput = document.querySelector('.popup__container-form-input_type_name');
export const jobInput = document.querySelector('.popup__container-form-input_type_job');
export const namePlaceInput = document.querySelector('.popup__container-form-input_type_name-place');
export const urlPlaceInput = document.querySelector('.popup__container-form-input_type_url');
export const places = [
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
export const elementsCardsContainer = document.querySelector('.elements__cards');
export const formElementList = {
  input: '.popup__container-form-input',
  submitButton: '.popup__container-form-button',
  inactiveButtonClass: 'popup__container-form-button_inactive',
  inputErrorClass: 'popup__container-form-input_error',
  errorTextClass: 'popup__container-form-input-text-error'
}