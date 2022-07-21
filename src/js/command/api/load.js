const load = (isLoad) => {
    const load = document.querySelector('.loading');
    if (isLoad) {
        load.classList.remove('load--passive');
        load.classList.add('load--active');
    } else {
        load.classList.add('load--passive');
        load.classList.remove('load--active');
    }
};

export default load;