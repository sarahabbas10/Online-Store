document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount")

    document.querySelector("#linkCreateAccount").addEventListener("click", () => {
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    })

    document.querySelector("#linkLogin").addEventListener("click", () => {
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");
    })
})



// function getNextUnique() {
//     var next = localStorage.getItem('nextUniqueId');
//     next = next ? parseInt(next) : 0;
//     var newNext = next + 1;
//     localStorage.setItem('nextUniqueId', newNext);
//     return next;
// }
// console.log("hi" + getNextUnique());

let user = {
    username: 'srahMira',
    password: '010101'
}
let num = 0
localStorage.setItem(num, JSON.stringify(user));
num++
// localStorage.clear()


let user1 = {
    username: 'saud12',
    password: '1234567'
}
localStorage.setItem(num, JSON.stringify(user1));
num++
//console.log(JSON.parse(localStorage.getItem(0)));


let userName = document.getElementById('userN')
let pass = document.getElementById('passwordUser')
let log1 = document.getElementById('login1')
let log2 = document.getElementsByClassName('form_button')


function action() {
    localStorage.setItem(userN, username)
}

function action2() {
    localStorage.getItem(header, name)
}
//console.log(document.getElementById('b1'));

// document.getElementById('b1').addEventListener('click', con())
console.log(document.getElementById("login"));
var formData = document.getElementById("login").serializeObject();
console.log(formData);


function con() {
    for (i = 0; i < num; i++) {
        //  console.log(JSON.parse(localStorage.getItem(i)));
        // console.log('in for ' + JSON.parse(localStorage.getItem(i)));
        //console.log(userName);
        if (JSON.parse(localStorage.getItem(i)) == userName.value && JSON.parse(localStorage.getItem(i).password) == pass.value) {
            console.log("yaaaaaaas");
        }
        console.log('nooooooooo');

    }
}