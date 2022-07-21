import deleteBook from "./deleteBook.js";
import getBooks from "./getBooks.js";
import isExistBook from "./isExistBook.js";
import likeBook from "./likeBook.js";
import showMoreInfo from "./showMoreInfo.js";

const showBooks = async () => {
    let bookList = document.querySelector('.book__list');
    const books = await getBooks();


    if (bookList) {
        bookList.textContent = '';
        books.forEach(el => {
            bookList.innerHTML += `<div class="book__item" data-id=${el.id}>
                            <div class="book__data">
                                <div class="book__item-title">
                                    ${el.name}
                                </div>
                                <div class="book__author">${el.author}</div>
                            </div>
                            <div class="book__action" id="${el.id}">
                                <form class="form-like">
                                    <input type="checkbox" ${el.isFavorite === true ? 'checked' : null} id="like-${el.id}" class="book__favorite">
                                    <label for="like-${el.id}" class="heart-label"></label>
                                </form>
                                <div class="book__del" id="${el.id}"></div>
                            </div>
                        </div>`
        });
        deleteBook();
        likeBook();
        showMoreInfo();
        isExistBook();
    }

}

export default showBooks;