const validation = (input) => {
    if (input.value.length < 4) {
        input.nextElementSibling.textContent = '*это поле должна состоять из более 4 символов';
        return false
    } else {
        input.nextElementSibling.textContent = '';
        return true
    }
}

export default validation;