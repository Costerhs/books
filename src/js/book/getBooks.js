import getUserId from "../command/getUserId";

const getBooks = async () => {
    const token = getUserId();
    const books = await fetch('http://localhost:1717/books', {
        headers: {
            'X-Auth': token
        }
    }).then(el => { return el.json() });

    return books
}

export default getBooks;