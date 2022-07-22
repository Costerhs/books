import { getMoreIfo } from "../command/api/api";
import setDataOnForm from "./setDataOnForm";
import updateBook from "./updateBook";

const showBookData = async () => {
    const name = document.querySelector('.more__title');
    const author = document.querySelector('.more__author');
    const house = document.querySelector('.more__house');
    const lang = document.querySelector('.more__lang');
    const date = document.querySelector('.more__data');
    const page = document.querySelector('.more__page');
    const genres = document.querySelector('.more__genres');
    const like = document.querySelector('.more__favorite');

    const bookData = await getMoreIfo();
    if (typeof bookData === 'string') {
        name.textContent = 'Убедитесь что вы выбрали книгу';
    } else if (name) {
        name.textContent = bookData.name;
        author.textContent = bookData.author;
        house.textContent = `Издательство: ${bookData.publishHouse || ''}`;
        lang.textContent = `Язык Оригинала: ${bookData.originalLanguage || ''}`;
        date.textContent = `Год Издания: ${bookData.publishYear || ''}`;
        page.textContent = `Кол-во страниц: ${bookData.pagesNumber || ''}`;
        genres.textContent = `Жанры: ${bookData.genres || ''}`;
        like.checked = bookData.isFavorite;
        updateBook(bookData)
    }
    // debugger
}

export default showBookData;