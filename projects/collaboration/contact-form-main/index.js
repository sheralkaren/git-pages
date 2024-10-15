document.querySelectorAll('input[name="query"]').forEach(radioBtn => {
    radioBtn.addEventListener('focus', () => {
        console.log(radioBtn.parentElement)
        radioBtn.parentElement.style.backgroundColor = "hsl(148, 38%, 91%)";

        if (document.querySelectorAll('input[name="query"]')[0].checked == false && document.querySelectorAll('input[name="query"]')[1].checked == false) {
            document.querySelector('.query > span').classList.add('show-error');
        }
        else {
            document.querySelector('.query > span').classList.remove('show-error');
        }

    });
})

// show error on focus out functionality
document.querySelectorAll('input, #message').forEach(input => {
    input.addEventListener('focusout', (e) => {
        if (e.target.value == '') {
            e.target.nextElementSibling.classList.add('show-error');
        }
        else if (e.target.id == 'email' && !/@/.test(e.target.value)) {
            e.target.nextElementSibling.classList.add('show-error');
        }
        else {
            e.target.nextElementSibling.classList.remove('show-error');
        }
    })
})











document.querySelector('button[type="submit"]').addEventListener('click', (e) => {

    // function checkSubmission() {
    // throw error if anything is left
    // firstName = document.querySelector('input[name="first_name"]');
    // lastName = document.querySelector('input[name="last_name"]');
    // email = document.querySelector('input[name="email"]');
    // queryValue = document.querySelectorAll('input[name="query"]')
    // textarea = document.querySelector('textarea');

    // if (inputError && checkError && queryError){
    //     window.location.reload();
    // }
    // }
    document.querySelectorAll('input, #message').forEach(elem => {

        if (elem.value == '') {
            elem.nextElementSibling.classList.add('show-error');
        }
        else {
            elem.nextElementSibling.classList.remove('show-error');
        }
    })

    check = document.querySelector('input[type="checkbox"]:checked');
    console.log(check);
    if (check == null) {
        document.querySelector('.check > span').classList.add('show-error');
    }
    else {
        document.querySelector('.check > span').classList.remove('show-error');
    }ß

});


