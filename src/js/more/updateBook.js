import { updateBookApi } from "../command/api/api";
import getActualBook from '../command/getActualBook.js'
import showBookData from "./showBookData";
const updateBook = (bookData) => {
    const name = document.getElementById('editsName');
    const author = document.getElementById('editsAuthor');
    const BookPublic = document.getElementById('editsPublic');
    const house = document.getElementById('editsHouse');
    const page = document.getElementById('editsPage');
    const genres = document.getElementById('editsGenres');
    const lang = document.getElementById('editsLang');

    const editWindow = document.querySelector('.edits');

    const sendBtn = document.querySelector('.edits__submit');

    name.value = bookData.name;
    author.value = bookData.author;
    house.value = bookData.publishHouse;
    lang.value = bookData.originalLanguage;
    BookPublic.value = bookData.publishYear;
    page.value = bookData.pagesNumber;
    genres.value = bookData.genres


    sendBtn?.addEventListener('click', async () => {
        const bookId = getActualBook();
        let book = {
            "name": name.value,
            "author": author.value,
            "publishYear": Number(BookPublic.value),
            "publishHouse": house.value,
            "pagesNumber": Number(page.value),
            "genres": [genres.value],
            "originalLanguage": lang.value
        }
        await updateBookApi(book, bookId)
        showBookData();
        editWindow.classList.remove('edits-act')
    })

}

export default updateBook;