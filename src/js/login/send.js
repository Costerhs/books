import sendUserData from "./sendUserData";
import setActiveUser from "./setActiveUser";
import validation from "./validation";

const send = () => {
    const name = document.querySelector('.login__user-name');
    const password = document.querySelector('.login__user-password');
    const typeForm = document.querySelectorAll('.login__radio');
    const sendBtn = document.querySelector('.login__submit');

    let api = '';

    typeForm?.forEach(el => {
        if (el.checked) api = el.id;
        el.addEventListener('click', () => api = el.id);
    })

    sendBtn?.addEventListener('click', async () => {
        if (validation(name) === true && validation(password) === true) {
            const result = await sendUserData(name, password, api);

            if (setActiveUser(result.token)) window.location.replace("books.html");
        }
    })
}

export default send;