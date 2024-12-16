// localStorage.setItem('name', 'Sheral');
// localStorage.setItem('xname', 'Dee');

// sessionStorage.setItem('newName', 'Shanaya');
// sessionStorage.setItem('xnewName', 'Elvie');

// document.cookie = 'name=Dee+xName=firangipaani; expires=' + new Date(9999,12,24).toUTCString();

const currentPage = window.location.pathname;

function checkAuth(){
    if (sessionStorage.getItem('login')){
        console.log(sessionStorage.getItem('login'));
        if (!currentPage.endsWith('index.html')) {
        window.location.href = "http://127.0.0.1:5500/projects/collaboration/a&a/simple-cookie/index.html";
        }
    } else {
        if (!currentPage.endsWith('login.html')) {
        window.location.href = "http://127.0.0.1:5500/projects/collaboration/a&a/simple-cookie/login.html";
    }
}
}

function logout(){
    sessionStorage.removeItem('login');
    console.log('Clicked');
    window.location.reload();
}

document.querySelector('button').addEventListener('click', createLogin );
document.querySelector('#logout').addEventListener('click', logout);


console.log(document.querySelector('#logout > p').textContent)

// set on login page
function createLogin(){
    sessionStorage.setItem('login', document.querySelector('input#email').value);
    window.location.reload();
}

