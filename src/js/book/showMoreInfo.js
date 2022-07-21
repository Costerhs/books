import showBookData from "../more/showBookData";

const showMoreInfo = () => {
    const books = document.querySelectorAll('.book__item');
    const bookAction = document.querySelectorAll('.book__action');

    for (let i = 0; i < books.length; i++) {
        books[i].addEventListener('click', (e) => {
            if (!e.path.includes(bookAction[i])) {
                window.location.replace('more.html');
                localStorage.setItem('actualBook', books[i].dataset.id);
            }
        })
    }
}

export default showMoreInfo;