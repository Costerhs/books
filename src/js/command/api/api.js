import getUserId from "../getUserId";

const token = getUserId();

export const deleteBookApi = async (id) => {
    await fetch(`http://localhost:1717/books/delete/${id}`, {
        method: 'DELETE',
        headers: {
            "X-Auth": token
        }
    });
}

export const likeBookApi = async (obj, id) => {
    await fetch(`http://localhost:1717/books/update/${id}`, {
        method: 'PUT',
        headers: {
            'X-Auth': token,
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(obj)
    })
}

export const addBookApi = async (book) => {
    await fetch('http://localhost:1717/books/create', {
        method: 'POST',
        headers: {
            "X-Auth": token,
            'Content-Type': 'application/json;charset=utf-8'

        },
        body: JSON.stringify(book)
    });
}

export const sendUserDataApi = async (actualApi, user) => {
    const response = await fetch(`http://localhost:1717/${actualApi}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    }).then(el => { return el.json() });
    return response
}