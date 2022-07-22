import getUserId from './command/getUserId'

const isAuth = () => {
    if (getUserId() === null) {
        localStorage.setItem('userId', 'error')
    }
    if (getUserId() === 'error' && window.location.pathname !== '/index.html' && window.location.pathname !== '/') {
        window.location.replace("index.html");
    }
}

export default isAuth;