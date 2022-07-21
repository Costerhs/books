const logOut = () => {
    const logBtn = document.querySelector('.book__logOut');
    logBtn?.addEventListener('click', () => {
        localStorage.setItem('userId', 'error');
        window.location.replace('index.html')
    })
}

export default logOut