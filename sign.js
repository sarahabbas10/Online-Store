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

    let user = {
        username: 'sarahMira',
        password: '010101'
    }
    let num = 0
    localStorage.setItem(num, JSON.stringify(user));
    num++



    let user1 = {
        username: 'saud12',
        password: '1234567'
    }
    localStorage.setItem(num, JSON.stringify(user1));
    num++

    user1 = {
        username: 'mahaKalid',
        password: '13131313'
    }
    localStorage.setItem(num, JSON.stringify(user1));
    num++
    user1 = {
        username: 'AhmedAbdulaziz',
        password: '055055055'
    }
    localStorage.setItem(num, JSON.stringify(user1));
    num++


    let userName = document.getElementById('userN')
    let pass = document.getElementById('passwordUser')
    let log1 = document.getElementById('login1')
    let log2 = document.getElementsByClassName('form_button')

    let newuserName = document.getElementById('newUserName')
    let pNewUser1 = document.getElementById('passwordNewUser')
    let pNewUser2 = document.getElementById('passwordNewUser2')

    let userN

    log2[0].onclick = function con() {
        let n = userName.value
        let p = pass.value
        console.log('name: ' + n);
        console.log('pass:' + p);
        for (i = 0; i < 1000; i++) {
            console.log("name!!! " + (JSON.parse(localStorage.getItem(i)).username));

            console.log("passs !!" + (JSON.parse(localStorage.getItem(i)).password));
            if ((JSON.parse(localStorage.getItem(i)).username) == n && (JSON.parse(localStorage.getItem(i)).password) == p) {
                console.log("yaaaaaaas");
            } else {
                console.log('nooooooooo');
            }

        }
    }


    //I use this function from this site https://stackoverflow.com/questions/16888939/create-and-store-user-objects-using-localstorage
    //to create new ID for each user 
    function getNextUnique() {
        var next = localStorage.getItem('nextUniqueId');
        next = next ? parseInt(next) : 3;
        var newNext = next + 1;
        localStorage.setItem('nextUniqueId', newNext);
        return next;
    }

    log2[1].onclick = function() {

            let n = newuserName.value
            let p = pNewUser1.value
            let p2 = pNewUser2.value
            console.log(p);
            console.log(p2);
            if (p == p2) {

                let users = {
                    username: n,
                    password: p
                }
                localStorage.setItem(getNextUnique(), JSON.stringify(users));


            } else {
                console.log("pass not match");
            }


        }
        // localStorage.clear()

})