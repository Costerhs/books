import '../css/index.scss';
import addBook from './book/addBook';
import showBooks from './book/showBooks';
import deleteBook from './book/deleteBook';
import getBooks from './book/getBooks';
import isAuth from './isAuth.js';
import send from './login/send.js';
import isExistBook from './book/isExistBook';



send();
isAuth();
getBooks();
showBooks()
addBook();

