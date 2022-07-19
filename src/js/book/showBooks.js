import deleteBook from "./deleteBook.js";
import getBooks from "./getBooks.js";
import isExistBook from "./isExistBook.js";
import likeBook from "./likeBook.js";

const showBooks = async () => {
    let bookList = document.querySelector('.book__list');
    const books = await getBooks();

    bookList.textContent = '';
    if (bookList) {
        books.forEach(el => {
            let item = document.createElement('div');
            item.classList.add('book__item');

            const bookData = document.createElement('div');
            bookData.classList.add('book__data');

            const bookAction = document.createElement('div');
            bookAction.classList.add('book__action');

            const heartCont = document.createElement('form');

            const heart = document.createElement('input')
            heart.setAttribute('type', 'checkbox');
            heart.id = `like-${el.id}`
            heart.classList.add('book__favorite')


            const heartLabel = document.createElement('label');
            heartLabel.setAttribute('for', `like-${el.id}`);
            heartLabel.classList.add('heart-label')
            heartLabel.textContent = 'heart';
            if (el.isFavorite === true) {
                heart.checked = true
            }
            heartCont.append(heart, heartLabel)

            const cart = document.createElement('div')
            cart.textContent = "delete";
            cart.classList.add('book__del')
            cart.id = el.id;

            let title = document.createElement('div')
            title.classList.add('book__item-title');
            title.textContent = el.name;

            let author = document.createElement('div')
            author.classList.add('book__author');
            author.textContent = el.author;

            item.append(bookData, bookAction)
            bookData.append(title, author)
            bookAction.append(heartCont, cart);
            bookList.append(item);
        });
        deleteBook();
        likeBook()
    }
    isExistBook();
}

export default showBooks;