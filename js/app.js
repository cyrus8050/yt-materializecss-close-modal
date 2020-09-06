const form = document.querySelector('.modal form');
const modal1 = document.querySelector('#modal1');
form.addEventListener('submit', e => {
    e.preventDefault();
    const username = form.username.value
    console.log(username)
    if (username.length > 5) {
        form.querySelector('.error').textContent = "The length of username should be less than or equal to 5"
    } else {
        form.reset();
        var instance = M.Modal.getInstance(modal1);
        instance.close();
    }
})