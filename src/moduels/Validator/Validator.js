import {globalConsts} from "../../globalConsts";

export default new class Validator {

    validateName(name) {
        if (name.length < globalConsts.validator.minNameLength) {
            return {valid: false, reason: 'Имя слишком короткое'}
        }
        return {valid: true, reason: null}
    }

    validateEmail(email) {
        return {valid: true, reason: null}
    }

    validatePassword(password, rePassword) {
        if (password !== rePassword) {
            return {valid: false, reason: 'Пароли не совпадают'}
        }
        if (password.length < globalConsts.validator.minPassLength) {
            return {valid: false, reason: 'Пароль слишком короткий'}
        }
        return {valid: true, reason: null}


    }
}();
