import sendUserData from "./sendUserData";
import setActiveUser from "./setActiveUser";
import validation, { passwordValidation } from "./validation";

const send = () => {
    const username = document.querySelector('.login__user-name');
    const password = document.querySelector('.login__user-password');
    const name = document.querySelector('.login__name');
    const age = document.querySelector('.login__years')
    const typeForm = document.querySelectorAll('.login__radio');
    const sendBtn = document.querySelector('.login__submit');

    let api = '';

    typeForm?.forEach(el => {
        if (el.checked) api = el.id;
        el.addEventListener('click', () => api = el.id);
    });

    sendBtn?.addEventListener('click', async () => {
        let user = {
            'username': username.value,
            'password': password.value
        }
        if (api == 'signin') {
            user = { ...user, 'firstName': name.value, 'age': age.value };
            if (!passwordValidation()) return false
        }

        if (validation(username) === true && validation(password) === true) {
            sendUserData(user, api);
        }
    });
}

export default send;