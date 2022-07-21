import getUserId from "../getUserId";
import load from "./load";

const token = getUserId();

export const deleteBookApi = async (id) => {
    load(true)
    await fetch(`http://localhost:1717/books/delete/${id}`, {
        method: 'DELETE',
        headers: {
            "X-Auth": token
        }
    });
    load(false)
}

export const updateBookApi = async (obj, id) => {
    load(true)
    await fetch(`http://localhost:1717/books/update/${id}`, {
        method: 'PUT',
        headers: {
            'X-Auth': token,
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(obj)
    })
    load(false)
}

export const addBookApi = async (book) => {
    load(true)
    await fetch('http://localhost:1717/books/create', {
        method: 'POST',
        headers: {
            "X-Auth": token,
            'Content-Type': 'application/json;charset=utf-8'

        },
        body: JSON.stringify(book)
    });
    load(false)
}

export const sendUserDataApi = async (actualApi, user) => {
    load(true)
    const response = await fetch(`http://localhost:1717/${actualApi}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    }).then(el => { return el.json() });

    load(false)
    return response
}

export const getMoreIfo = async () => {
    load(true)
    const id = localStorage.getItem('actualBook');
    const response = await fetch(`http://localhost:1717/books/${id}`, {
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            "X-Auth": token
        }
    }).then(el => { return el.json() });
    load(false)
    return response;

}