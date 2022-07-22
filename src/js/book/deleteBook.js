import { deleteBookApi } from "../command/api/api";
import getUserId from "../command/getUserId";
import showBooks from "./showBooks";

const deleteBook = () => {
    const books = document.querySelectorAll('.book__del');

    books.forEach(book => {
        book.addEventListener('click', async () => {
            const id = book.id;
            await deleteBookApi(id)
            showBooks()
        })
    });

}

export default deleteBook;