import '../css/index.scss';

import isAuth from './isAuth.js';
import { toggleOpenWindow, showBookData, deleteBookInMore, likeBookInMore } from './more';
import { addBook, showBooks, showMoreInfo, showUserName, getBooks, logOut } from './book'
import { send, toggleSignMode } from './login';

isAuth();
likeBookInMore();
send();
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

