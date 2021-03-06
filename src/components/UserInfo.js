export class UserInfo {
    constructor ({nameValueSelector, jobValueSelector, avatarSelector}) {
        this._nameValue = document.querySelector(nameValueSelector);
        this._jobValue = document.querySelector(jobValueSelector);
        this._avatar = document.querySelector(avatarSelector);
    }
        
    getUserInfo () {
        const data = {}
        data.name = this._nameValue.textContent;
        data.about = this._jobValue.textContent;
        return data;
    }

    setUserInfo (data) {
        this._nameValue.textContent = data.name;
        this._jobValue.textContent = data.about;
        this._avatar.src = data.avatar;
    }
}