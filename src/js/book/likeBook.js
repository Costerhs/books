import { updateBookApi } from "../command/api/api";
import getUserId from "../command/getUserId";

const likeBook = () => {
    const favoriteBtn = document.querySelectorAll('.book__favorite');
    const token = getUserId();

    favoriteBtn.forEach(el => {
        el.addEventListener('click', async () => {
            const obj = {
                "isFavorite": el.checked
            }
            updateBookApi(obj, el.id.split(`like-`)[1])
        })
    })
}
export default likeBook;