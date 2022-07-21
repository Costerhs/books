import getUserId from "../command/getUserId";
import showBooks from "./showBooks";
import getBooks from "./getBooks";
import { addBookApi } from "../command/api/api";
import isExistBook from "./isExistBook";

const toggleForm = (form, class1, bg, class2) => {
    form.classList.toggle(`${class1}`);
    bg.classList.toggle(`${class2}`);
}
const addBook = () => {
    const form = document.querySelector('.book__form .form');
    const btn = document.querySelector('.book__btn');
    const bookForm = document.querySelector('.book__form');
    const bg = document.querySelector('.book .container');
    const sendBook = document.querySelector('.book__submit');

    const name = document.getElementById('bookName');
    const author = document.getElementById('bookAuthor');
    const BookPublic = document.getElementById('bookPublic');
    const house = document.getElementById('bookHouse');
    const page = document.getElementById('bookPage');
    const genres = document.getElementById('bookGenres');
    const lang = document.getElementById('bookLang');

    btn?.addEventListener('click', () => {
        toggleForm(bookForm, 'book__form-passive', bg, 'filt')
    })

    sendBook?.addEventListener('click', async () => {
        let book = {
            "name": name.value,
            "author": author.value,
            "publishYear": Number(BookPublic.value),
            "publishHouse": house.value,
            "pagesNumber": Number(page.value),
            "genres": [genres.value],
            "originalLanguage": lang.value
        }
        addBookApi(book)
        showBooks()
        toggleForm(bookForm, 'book__form-passive', bg, 'filt')
        isExistBook();
    });


    const bgr = document.querySelector('.book__form');
    bgr?.addEventListener('click', (e) => {
        if (!e.path.includes(form)) {
            toggleForm(bookForm, 'book__form-passive', bg, 'filt')
        }
    })
}

export default addBook;
