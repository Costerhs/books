const toggleSignMode = () => {
    const signElem = document.querySelectorAll('.login__user-more');

    const signIn = document.querySelector('.signIn');
    const signUp = document.querySelector('.signUp');


    signIn?.addEventListener('click', () => {
        signElem.forEach(el => el.classList.remove('login__user-more'))
    });

    signUp?.addEventListener('click', () => {
        signElem.forEach(el => el.classList.add('login__user-more'))
    });

}

export default toggleSignMode;