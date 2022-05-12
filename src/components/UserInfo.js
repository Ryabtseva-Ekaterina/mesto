import { nameInput, jobInput } from "../utils/constants.js";

export class UserInfo {
    constructor ({nameValue, jobValue}) {
        this._nameValue = nameValue;
        this._jobValue = jobValue;
    }

    getUserInfo () {
        nameInput.value = this._nameValue.textContent;
        jobInput.value = this._jobValue.textContent;
    }

    setUserInfo () {
        this._nameValue.textContent = nameInput.value;
        this._jobValue.textContent = jobInput.value;
    }
}