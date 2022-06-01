const handleResponse = (res) => {
    if (res.ok) {
        return res.json();
      }
    return Promise.reject(res.status);
}


export class Api {
    constructor (options){
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }
     
    
    getProfileInfo () {
        return fetch (`${this._baseUrl}/users/me`, { 
            headers: this._headers})
        .then(handleResponse);
    }

    getCards () {
        return fetch (`${this._baseUrl}/cards`, { 
            headers: this._headers})
        .then(handleResponse);
    }
    
    updateUserInfo (data) {
        return fetch (`${this._baseUrl}/users/me`, { 
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(data)})
        .then(handleResponse);
    }

    createNewCard (data) {
        return fetch (`${this._baseUrl}/cards`, { 
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data)})
        .then(handleResponse);
    }

    deleteCard (data, id) {
        const cardId = id;
        return fetch (`${this._baseUrl}/cards/${cardId}`, { 
            method: 'DELETE',
            headers: this._headers,
            body: JSON.stringify(data)})
        .then(handleResponse);
    }

    updateUserAvatar (data) {
        return fetch (`${this._baseUrl}/users/me/avatar`, { 
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(data)})
        .then(handleResponse);
    }

    likeCard (data, id) {
        const cardId = id;
        return fetch (`${this._baseUrl}/cards/${cardId}/likes`, { 
            method: 'PUT',
            headers: this._headers,
            body: JSON.stringify(data)})
        .then(handleResponse);
    }

    disLikeCard (data, id) {
        const cardId = id;
        return fetch (`${this._baseUrl}/cards/${cardId}/likes`, { 
            method: 'DELETE',
            headers: this._headers,
            body: JSON.stringify(data)})
        .then(handleResponse);
    }
}