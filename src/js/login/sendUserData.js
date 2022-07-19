import { sendUserDataApi } from "../command/api/api";

const sendUserData = async (name, password, actualApi) => {
    const errorText = document.querySelector('.api-error')
    const user = {
        "username": name.value,
        "password": password.value
    }

    const response = sendUserDataApi(actualApi, user)

    if (typeof response === 'string') {
        errorText.textContent = response;
    }
    return response
}

export default sendUserData;