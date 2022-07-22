const validationForm = (input) => {
    if (input.value.length <= 0) {
        input.nextElementSibling.textContent = 'это поле обязательна'
        return false
    } else {
        input.nextElementSibling.textContent = ''
        return true
    }
}

export default validationForm;