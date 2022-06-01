export class UserInfo {
    constructor ({nameValueSelector, jobValueSelector}) {
        this._nameValue = document.querySelector(nameValueSelector);
        this._jobValue = document.querySelector(jobValueSelector);
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
    }
}