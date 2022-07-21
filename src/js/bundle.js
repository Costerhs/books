import '../css/index.scss';
import addBook from './book/addBook';
import showBooks from './book/showBooks';
import deleteBook from './book/deleteBook';
import getBooks from './book/getBooks';
import isAuth from './isAuth.js';
import send from './login/send.js';
import isExistBook from './book/isExistBook';
import logOut from './book/logOut';
import showUserName from './book/showUserName';
import showMoreInfo from './book/showMoreInfo';
import toggleSignMode from './login/toggleSignMode';
import showBookData from './more/showBookData';
import likeBookInMore from './more/likeBookInMore.js';
import deleteBookInMore from './more/deleteBookInMore';
import toggleOpenWindow from './more/toggleEditWindow';

console.log('as')
likeBookInMore();
send();
isAuth();
getBooks();
showBooks()
addBook();
logOut();
showUserName();
showMoreInfo()
toggleSignMode();
showBookData();
deleteBookInMore();
toggleOpenWindow()

