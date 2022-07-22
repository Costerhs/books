const isExistBook = () => {
    const books = document.querySelectorAll('.book__item');
    const emptyText = document.querySelector('.book__empty');

    if (books && books.length === 0) emptyText.textContent = 'добавленных книг пока нет'
    else emptyText.textContent = ''
}

export default isExistBook;