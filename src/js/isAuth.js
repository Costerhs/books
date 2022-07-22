import getUserId from './command/getUserId'

const isAuth = () => {
    if (getUserId() === 'error' && window.location.pathname !== '/index.html' && window.location.pathname !== '/') {
        window.location.replace("index.html");
    }

    if (getUserId() === null) {
        localStorage.setItem('userId', 'error')
    }
}

export default isAuth;