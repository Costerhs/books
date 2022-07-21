import { deleteBookApi } from "../command/api/api";
import getActualBook from "../command/getActualBook";

const deleteBookInMore = () => {
    const delBtn = document.querySelector('.more__del');
    const id = getActualBook();

    delBtn?.addEventListener('click', () => {
        deleteBookApi(id);
        window.location.replace('books.html')
    })
}

export default deleteBookInMore;