import getUserId from "../command/getUserId";

const showUserName = async () => {
    const name = document.querySelector('.book__username')
    if (name) {
        const token = getUserId();
        const userData = await fetch('http://localhost:1717/me', {
            headers: {
                'X-Auth': token
            }
        }).then(el => { return el.json() });

        name.textContent = userData.username;
    }

}

export default showUserName;