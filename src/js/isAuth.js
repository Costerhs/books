const isAuth = () => {
    if (localStorage.getItem('userId') === 'error' && window.location.pathname !== '/index.html' && window.location.pathname !== '/') {
        window.location.replace("index.html");
    }
}

export default isAuth;