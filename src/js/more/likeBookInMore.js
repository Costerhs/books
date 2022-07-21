import { updateBookApi } from "../command/api/api";
import getActualBook from "../command/getActualBook";

const likeBook = () => {
    const likeBtn = document.querySelector('.more__favorite');
    const id = getActualBook();

    likeBtn?.addEventListener('click', () => {
        const obj = {
            "isFavorite": likeBtn.checked
        }
        updateBookApi(obj, id);
    })
}

export default likeBook;