const validation = (input) => {
    if (input.value.length < 4) {
        input.nextElementSibling.textContent = '*это поле должна состоять из более 4 символов';
        return false
    } else {
        input.nextElementSibling.textContent = '';
        return true
    }
}

export default validation;

export const passwordValidation = () => {
    const password = document.querySelector('#pass');
    const confPass = document.querySelector('#conf-pass');

    if (password.value !== confPass.value) {
        confPass.nextElementSibling.textContent = 'пароли должны совпадать';
        return false
    }
    else {
        confPass.nextElementSibling.textContent = '';
        return true
    }
}