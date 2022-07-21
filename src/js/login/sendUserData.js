import { sendUserDataApi } from "../command/api/api";
import setActiveUser from "./setActiveUser";

const sendUserData = async (user, actualApi) => {
    const errorText = document.querySelector('.api-error')
    const response = await sendUserDataApi(actualApi, user)

    if (typeof response === 'string') errorText.textContent = response;
    else {
        setActiveUser(response.token);
        window.location.replace("books.html")
    }
}

export default sendUserData;