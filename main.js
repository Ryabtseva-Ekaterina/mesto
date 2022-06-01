(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_showInputError",(function(e,t){var n=o._form.querySelector(".".concat(e.id,"-error"));e.classList.add(o._inputErrorClass),n.textContent=t,n.classList.add(o._errorTextClass)})),t(this,"_hideInputError",(function(e){var t=o._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(o._inputErrorClass),t.classList.remove(o._errorTextClass),t.textContent=" "})),t(this,"_hasInvalidInput",(function(){return o._inputList.some((function(e){return!e.validity.valid}))})),t(this,"_disableButtonElement",(function(){o._buttonElement.classList.add(o._inactiveButtonClass),o._buttonElement.disabled=!0})),t(this,"_activeButtonElement",(function(){o._buttonElement.classList.remove(o._inactiveButtonClass),o._buttonElement.disabled=!1})),t(this,"_toggleButtonState",(function(){o._hasInvalidInput(o._inputList)?o._disableButtonElement(o._buttonElement):o._activeButtonElement(o._buttonElement)})),t(this,"_isValid",(function(e){e.validity.valid?o._hideInputError(e):o._showInputError(e,e.validationMessage)})),t(this,"_setEventListeners",(function(){o._toggleButtonState(),o._inputList.forEach((function(e){e.addEventListener("input",(function(){o._isValid(e),o._toggleButtonState(o._inputList)}))}))})),t(this,"enableValidation",(function(){o._form.addEventListener("submit",(function(e){e.preventDefault()})),o._setEventListeners()})),this._input=e.input,this._submitButton=e.submitButton,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorTextClass=e.errorTextClass,this._form=r,this._buttonElement=this._form.querySelector(this._submitButton),this._inputList=Array.from(this._form.querySelectorAll(this._input))}var r,o;return r=n,(o=[{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n,r){var o=t.data,i=t.handleCardClick,a=t.deleteCardPopup,c=t.likeCards,u=t.disLikeCards;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=o.name,this._link=o.link,this._likes=o.likes,this._owner=o.owner,this._id=o._id,this._handleCardClick=i,this._deleteCardPopup=a,this._likeCards=c,this._disLikeCards=u,this._userId=n,this._cardSelector=r}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".elements__card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".elements__card-image"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element.querySelector(".elements__card-title").textContent=this._name,this._like=this._element.querySelector(".elements__card-like-button"),this._likeCounter=this._element.querySelector(".elements__card-like-counter"),this._likeCounter.textContent=this._likes.length,this._deleteCardButton=this._element.querySelector(".elements__card-delete-button"),console.log(this._userId),console.log(this._owner._id),this._userId===this._owner._id?this._deleteCardButton.classList.add("elements__card-delete-button_visible"):this._deleteCardButton.classList.remove("elements__card-delete-button_visible"),this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._like.addEventListener("click",(function(){e._like=!e._like,e._like?e._disLikeCards(e._element,e._id,e._likeCounter):e._likeCards(e._element,e._id,e._likeCounter)})),this._deleteCardButton.addEventListener("click",(function(){e._deleteCardPopup(e._element,e._id)})),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._initialArray.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){if("Escape"===e.key){var t=document.querySelector(".popup_opened");o.close(t)}},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close-button").addEventListener("click",(function(){e.close()})),this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup_opened")&&e.close(t.target)}))}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function _(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".zoom-popup__card"),t._imageName=t._popup.querySelector(".zoom-popup__card-title"),t}return t=a,(n=[{key:"open",value:function(e,t){this._image.src=t,this._image.alt=e,this._imageName.textContent=e,f(h(a.prototype),"open",this).call(this)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function w(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return E(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function a(e,t){var n,r,o,c=e.callbackSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),o=void 0,1 in(r=E(n=i.call(this,t)))?Object.defineProperty(r,1,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[1]=o,n._callbackSubmit=c,n._formElement=n._popup.querySelector(".popup__container-form"),n._inputList=n._formElement.querySelectorAll(".popup__container-form-input"),n._popupButton=n._popup.querySelector(".popup__container-form-button"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",(function(t){t.target.classList.contains("popup_opened")&&e.renderLoading(t.target),e._callbackSubmit(e._getInputValues())})),v(C(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){v(C(a.prototype),"close",this).call(this),this._formElement.reset()}},{key:"renderLoading",value:function(e){this._popupButton.textContent=e?"Сохранение...":"Сохранить"}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){var n=t.nameValueSelector,r=t.jobValueSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameValue=document.querySelector(n),this._jobValue=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e={};return e.name=this._nameValue.textContent,e.about=this._jobValue.textContent,e}},{key:"setUserInfo",value:function(e){this._nameValue.textContent=e.name,this._jobValue.textContent=e.about}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P,q=function(e){return e.ok?e.json():Promise.reject(e.status)},I=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getProfileInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(q)}},{key:"getCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(q)}},{key:"updateUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(q)}},{key:"createNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(q)}},{key:"deleteCard",value:function(e,t){var n=t;return fetch("".concat(this._baseUrl,"/cards/").concat(n),{method:"DELETE",headers:this._headers,body:JSON.stringify(e)}).then(q)}},{key:"updateUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(q)}},{key:"likeCard",value:function(e,t){var n=t;return fetch("".concat(this._baseUrl,"/cards/").concat(n,"/likes"),{method:"PUT",headers:this._headers,body:JSON.stringify(e)}).then(q)}},{key:"disLikeCard",value:function(e,t){var n=t;return fetch("".concat(this._baseUrl,"/cards/").concat(n,"/likes"),{method:"DELETE",headers:this._headers,body:JSON.stringify(e)}).then(q)}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),B=document.querySelector(".profile__intro-edit-button"),T=document.querySelector(".profile__add-button"),R=document.querySelector(".edit-popup__form"),V=document.querySelector(".add-popup__form"),x=document.querySelector(".edit-avatar-popup__form"),U=document.querySelector(".popup__container-form-input_type_name"),N=document.querySelector(".popup__container-form-input_type_job"),D=document.querySelector(".profile__avatar-image"),A={input:".popup__container-form-input",submitButton:".popup__container-form-button",inactiveButtonClass:"popup__container-form-button_inactive",inputErrorClass:"popup__container-form-input_error",errorTextClass:"popup__container-form-input-text-error"};function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(){return H="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=M(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},H.apply(this,arguments)}function M(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=K(e)););return e}function F(e,t){return F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},F(e,t)}function G(e,t){if(t&&("object"===J(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function K(e){return K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},K(e)}var Q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=K(r);if(o){var n=K(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return G(this,e)});function a(e,t){var n,r=e.data,o=e.callbackSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._callbackSubmit=o,n._data=r,n._formElement=n._popup.querySelector(".popup__container-form"),n}return t=a,(n=[{key:"open",value:function(e,t){this._element=e,this._element_id=t,H(K(a.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._callbackSubmit(e._data,e._element,e._element_id)})),H(K(a.prototype),"setEventListeners",this).call(this)}}])&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u),W=new L({nameValueSelector:".profile__intro-name",jobValueSelector:".profile__intro-description"}),X=new I({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-42",headers:{authorization:"9cb90cfb-8967-42d4-ab64-1c7ec7e3930d","Content-Type":"application/json"}});X.getProfileInfo().then((function(e){W.setUserInfo(e),D.src=e.avatar,console.log(e._id),P=e._id,console.log(P)})).catch((function(e){console.log(e)}));var Y=new y(".zoom-popup");Y.setEventListeners();var Z=new Q({callbackSubmit:function(e,t,n){X.deleteCard(e,n).then((function(e){t.remove()})).catch((function(e){console.log(e)})),Z.close()}},".delete-popup");Z.setEventListeners();var $=function(e){var t=new o({data:e,handleCardClick:function(e,t){Y.open(e,t)},deleteCardPopup:function(e,t){Z.open(e,t)},likeCards:function(e,t){X.likeCard(e,t).then((function(t){e.querySelector(".elements__card-like-button").classList.add("elements__card-like-button-active"),e.querySelector(".elements__card-like-counter").textContent=t.likes.length})).catch((function(e){console.log(e)}))},disLikeCards:function(e,t){X.disLikeCard(e,t).then((function(t){e.querySelector(".elements__card-like-button").classList.remove("elements__card-like-button-active"),e.querySelector(".elements__card-like-counter").textContent=t.likes.length})).catch((function(e){console.log(e)}))}},P,"#cards");return t.generateCard()},ee=new a({data:[]},".elements__cards");X.getCards().then((function(e){var t=new a({data:e,renderer:function(e){var n=$(e);t.addItem(n)}},".elements__cards");t.renderItems()})).catch((function(e){console.log(e)}));var te=new S({callbackSubmit:function(e){te.renderLoading(!0),X.createNewCard(e).then((function(e){var t=$(e);ee.addItem(t),te.close()})).catch((function(e){console.log(e)})).finally((function(){te.renderLoading(!1)}))}},".add-popup");te.setEventListeners();var ne=new S({callbackSubmit:function(e){ne.renderLoading(!0),X.updateUserInfo(e).then((function(e){W.setUserInfo(e),ne.close()})).catch((function(e){console.log(e)})).finally((function(){ne.renderLoading(!1)}))}},".edit-popup");ne.setEventListeners(),B.addEventListener("click",(function(){var e;e=W.getUserInfo(),U.value=e.name,N.value=e.about,oe.resetValidation(),ne.open()})),T.addEventListener("click",(function(){ie.resetValidation(),te.open()}));var re=new S({callbackSubmit:function(e){re.renderLoading(!0),X.updateUserAvatar(e).then((function(e){D.src=e.avatar,re.close()})).catch((function(e){console.log(e)})).finally((function(){re.renderLoading(!1)}))}},".edit-avatar-popup");re.setEventListeners();var oe=new n(A,R);oe.enableValidation();var ie=new n(A,V);ie.enableValidation();var ae=new n(A,x);ae.enableValidation(),document.querySelector(".profile__avatar-button").addEventListener("click",(function(){ae.resetValidation(),re.open()}))})();