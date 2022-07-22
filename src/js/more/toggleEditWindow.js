const toggleOpenWindow = (close) => {
    const editWindow = document.querySelector('.edits');
    const openBtn = document.querySelector('.edit');
    const form = document.querySelector('.edits .form');

    openBtn?.addEventListener('click', () => {
        editWindow.classList.add('edits-act')
    });

    editWindow?.addEventListener('click', (e) => {
        if (!e.path.includes(form)) editWindow.classList.remove('edits-act')
    });

}

export default toggleOpenWindow;