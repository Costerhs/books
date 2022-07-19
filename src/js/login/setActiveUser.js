const setActiveUser = (id) => {
    const actualId = id != null
    localStorage.setItem('userId', actualId ? id : 'error');
    return actualId;
}

export default setActiveUser;