fetch("https://api-mobilespecs.azharimm.site/v2/brands/apple-phones-48?page=2")
    .then(function(response) {
        return response.json()
            //"http://api-mobilespecs.azharimm.site/v2/brands/samsung-phones-9"
            //http://api-mobilespecs.azharimm.site/v2/brands/huawei-phones-58
            //'https://api-mobilespecs.azharimm.site/v2/brands/apple-phones-48?page=2'
    })
    .then(function(json) {
        document.getElementById('mycart').addEventListener('click', function() {
            const item = document.querySelector(".items")
            item.classList.add("hidden-items");
            document.getElementById("formCart").style.display = "block";

        })
        document.getElementById("formCart").style.display = "none";
        document.getElementById('apple').addEventListener('click', function() {

            let searchButton = document.getElementById('search-button');
            let searchInput = document.getElementById('input1');

            let pro1 = document.getElementById('grid-container1')
            let index
            let pic = document.createElement('img')
            let name2 = document.createElement('h5')
            let total = 0

            document.getElementById("formCart").style.display = "none";
            for (i = 0; i < json.data.phones.length; i++) {


                let p1 = document.createElement('img')
                let g1 = document.createElement('div')
                g1.className = 'grid-item'
                pro1.appendChild(g1)
                p1.className = 'img1'
                p1.src = json.data.phones[i].image
                    // p1.style = 'width: 100px'

                let h = document.createElement('h4')
                h.className = 'name1'
                h.innerText = json.data.phones[i].phone_name
                let pr = document.createElement('h5')
                pr.className = 'price1'

                price = Math.floor(Math.random() * (3000 - 2000 + 1) + 2000)
                pr.innerText = price + ' SAR'
                let cart = document.createElement('button')
                cart.id = 'shop'
                cart.type = "submit"
                cart.className = 'cart1 '
                cart.innerText = 'Add to cart'

                g1.appendChild(p1)
                g1.appendChild(h)
                g1.appendChild(pr)
                g1.appendChild(cart)


                pic = p1


                let arr = document.querySelectorAll(".grid-item")

                let x = arr[i].getElementsByClassName('cart1')[0]
                for (let j = i; j <= i; j++) {

                    x.addEventListener('click', function() {


                        let rra = document.querySelectorAll(".grid-item")
                        let d1 = document.createElement('div')
                        d1.className = 'cart-row'
                        let d2 = document.createElement('div')
                        d2.className = 'cart-item cart-column'
                        let big = document.getElementById('carts')
                        console.log(document.getElementById('carts'));
                        big.appendChild(d1)
                        d1.appendChild(d2)


                        let im = document.createElement('img')
                        let sr = rra[j].getElementsByClassName('img1')[0]
                        im.src = sr.src
                        im.style = 'wdth:100', ' height: 100 '
                        d2.appendChild(im)
                        let name2 = rra[j].getElementsByClassName('name1')[0]
                        let s1 = document.createElement('span')
                        s1.className = 'cart-item-title'
                        s1.innerText = name2.innerText
                        s1.style = 'margin-left: 5%;'
                        d2.appendChild(s1)

                        let prr = rra[j].getElementsByClassName('price1')[0]
                        let s2 = document.createElement('span')
                        s2.className = 'cart-price cart-column'
                        s2.innerText = prr.innerText
                        s2.style = 'margin-left: 14%; padding:20px'
                        d2.appendChild(s2)

                        let remove = document.createElement('button')
                        remove.className = 'remove1'
                        remove.innerText = 'Remove'
                        d2.appendChild(remove)


                        let t = parseInt(prr.innerText.substring(0, 4));
                        console.log("ttttttttt  " + t);
                        total = parseInt(total + t)
                        console.log("totalllll  " + total);

                        document.getElementById('total').innerText = "Total: " + total + " SAR"
                        remove.addEventListener('click', function(event) {
                            // total = parseInt(total - t)
                            let bClicked = event.target
                            bClicked.parentElement.parentElement.remove()
                            document.getElementById('total').innerText = "Total: " + parseInt(total - t) + " SAR"

                        })

                    })
                }
            }

            document.getElementById('mycart').addEventListener('click', function() {
                const item = document.querySelector(".items")
                item.classList.add("hidden-items");
                document.getElementById("formCart").style.display = "block";

            })
            document.getElementById('continue').addEventListener('click', function() {
                window.open("index.html");
            })
            document.getElementById('chekout').addEventListener('click', function() {
                const formInof = document.querySelector(".info")
                formInof.classList.remove("hidden-info");
            })

            //End
        })
    })
fetch("http://api-mobilespecs.azharimm.site/v2/brands/huawei-phones-58")
    .then(function(response) {
        return response.json()
            //"http://api-mobilespecs.azharimm.site/v2/brands/samsung-phones-9"
            //http://api-mobilespecs.azharimm.site/v2/brands/huawei-phones-58
            //'https://api-mobilespecs.azharimm.site/v2/brands/apple-phones-48?page=2'
    })
    .then(function(json) {
        document.getElementById('huawei').addEventListener('click', function() {

            let searchButton = document.getElementById('search-button');
            let searchInput = document.getElementById('input1');

            let pro1 = document.getElementById('grid-container2')
            let index
            let pic = document.createElement('img')
            let name2 = document.createElement('h5')
            let total = 0

            document.getElementById("formCart").style.display = "none";
            for (i = 0; i < json.data.phones.length; i++) {


                let p1 = document.createElement('img')
                let g1 = document.createElement('div')
                g1.className = 'grid-item'
                pro1.appendChild(g1)
                p1.className = 'img1'
                p1.src = json.data.phones[i].image
                    // p1.style = 'width: 100px'

                let h = document.createElement('h4')
                h.className = 'name1'
                h.innerText = json.data.phones[i].phone_name
                let pr = document.createElement('h5')
                pr.className = 'price1'

                price = Math.floor(Math.random() * (3000 - 2000 + 1) + 2000)
                pr.innerText = price + ' SAR'
                let cart = document.createElement('button')
                cart.id = 'shop'
                cart.className = 'cart1 '
                cart.type = "submit"
                cart.innerText = 'Add to cart'

                g1.appendChild(p1)
                g1.appendChild(h)
                g1.appendChild(pr)
                g1.appendChild(cart)


                pic = p1


                let arr = document.querySelectorAll(".grid-item")

                let x = arr[i].getElementsByClassName('cart1')[0]
                for (let j = i; j <= i; j++) {

                    x.addEventListener('click', function() {

                        let rra = document.querySelectorAll(".grid-item")
                        let d1 = document.createElement('div')
                        d1.className = 'cart-row'
                        let d2 = document.createElement('div')
                        d2.className = 'cart-item cart-column'
                        let big = document.getElementById('carts')
                        console.log(document.getElementById('carts'));
                        big.appendChild(d1)
                        d1.appendChild(d2)


                        let im = document.createElement('img')
                        let sr = rra[j].getElementsByClassName('img1')[0]
                        im.src = sr.src
                        im.style = 'wdth:100', ' height: 100 '
                        d2.appendChild(im)
                        let name2 = rra[j].getElementsByClassName('name1')[0]
                        let s1 = document.createElement('span')
                        s1.className = 'cart-item-title'
                        s1.innerText = name2.innerText
                        s1.style = 'margin-left: 5%;'
                        d2.appendChild(s1)

                        let prr = rra[j].getElementsByClassName('price1')[0]
                        let s2 = document.createElement('span')
                        s2.className = 'cart-price cart-column'
                        s2.innerText = prr.innerText
                        s2.style = 'margin-left: 14%; padding:20px'
                        d2.appendChild(s2)

                        let remove = document.createElement('button')
                        remove.className = 'remove1'
                        remove.innerText = 'Remove'
                        d2.appendChild(remove)


                        let t = parseInt(prr.innerText.substring(0, 4));
                        console.log("ttttttttt  " + t);
                        total = parseInt(total + t)
                        console.log("totalllll  " + total);

                        document.getElementById('total').innerText = "Total: " + total + " SAR"
                        remove.addEventListener('click', function(event) {
                            // total = parseInt(total - t)
                            let bClicked = event.target
                            bClicked.parentElement.parentElement.remove()
                            document.getElementById('total').innerText = "Total: " + parseInt(total - t) + " SAR"

                        })

                    })
                }
            }

            document.getElementById('mycart').addEventListener('click', function() {
                const item = document.querySelector(".items")
                item.classList.add("hidden-items");
                document.getElementById("formCart").style.display = "block";

            })
            document.getElementById('continue').addEventListener('click', function() {
                window.open("index.html");
            })
            document.getElementById('chekout').addEventListener('click', function() {
                const formInof = document.querySelector(".info")
                formInof.classList.remove("hidden-info");
            })

            //End
        })
    })


fetch("http://api-mobilespecs.azharimm.site/v2/brands/samsung-phones-9")
    .then(function(response) {
        return response.json()
            //"http://api-mobilespecs.azharimm.site/v2/brands/samsung-phones-9"
            //http://api-mobilespecs.azharimm.site/v2/brands/huawei-phones-58
            //'https://api-mobilespecs.azharimm.site/v2/brands/apple-phones-48?page=2'
    })
    .then(function(json) {
        document.getElementById('samsung').addEventListener('click', function() {

            let searchButton = document.getElementById('search-button');
            let searchInput = document.getElementById('input1');

            let pro1 = document.getElementById('grid-container3')
            let index
            let pic = document.createElement('img')
            let name2 = document.createElement('h5')
            let total = 0

            document.getElementById("formCart").style.display = "none";
            for (i = 0; i < json.data.phones.length; i++) {


                let p1 = document.createElement('img')
                let g1 = document.createElement('div')
                g1.className = 'grid-item'
                pro1.appendChild(g1)
                p1.className = 'img1'
                p1.src = json.data.phones[i].image
                    // p1.style = 'width: 100px'

                let h = document.createElement('h4')
                h.className = 'name1'
                h.innerText = json.data.phones[i].phone_name
                let pr = document.createElement('h5')
                pr.className = 'price1'

                price = Math.floor(Math.random() * (3000 - 2000 + 1) + 2000)
                pr.innerText = price + ' SAR'
                let cart = document.createElement('button')
                cart.id = 'shop'
                cart.type = "submit"
                cart.className = 'cart1 '
                cart.innerText = 'Add to cart'

                g1.appendChild(p1)
                g1.appendChild(h)
                g1.appendChild(pr)
                g1.appendChild(cart)


                pic = p1


                let arr = document.querySelectorAll(".grid-item")

                let x = arr[i].getElementsByClassName('cart1')[0]
                for (let j = i; j <= i; j++) {

                    x.addEventListener('click', function() {

                        let rra = document.querySelectorAll(".grid-item")
                        let d1 = document.createElement('div')
                        d1.className = 'cart-row'
                        let d2 = document.createElement('div')
                        d2.className = 'cart-item cart-column'
                        let big = document.getElementById('carts')
                        console.log(document.getElementById('carts'));
                        big.appendChild(d1)
                        d1.appendChild(d2)


                        let im = document.createElement('img')
                        let sr = rra[j].getElementsByClassName('img1')[0]
                        im.src = sr.src
                        im.style = 'wdth:100', ' height: 100 '
                        d2.appendChild(im)
                        let name2 = rra[j].getElementsByClassName('name1')[0]
                        let s1 = document.createElement('span')
                        s1.className = 'cart-item-title'
                        s1.innerText = name2.innerText
                        s1.style = 'margin-left: 5%;'
                        d2.appendChild(s1)

                        let prr = rra[j].getElementsByClassName('price1')[0]
                        let s2 = document.createElement('span')
                        s2.className = 'cart-price cart-column'
                        s2.innerText = prr.innerText
                        s2.style = 'margin-left: 14%; padding:20px'
                        d2.appendChild(s2)

                        let remove = document.createElement('button')
                        remove.className = 'remove1'
                        remove.innerText = 'Remove'
                        d2.appendChild(remove)


                        let t = parseInt(prr.innerText.substring(0, 4));
                        console.log("ttttttttt  " + t);
                        total = parseInt(total + t)
                        console.log("totalllll  " + total);

                        document.getElementById('total').innerText = "Total: " + total + " SAR"
                        remove.addEventListener('click', function(event) {
                            // total = parseInt(total - t)
                            let bClicked = event.target
                            bClicked.parentElement.parentElement.remove()
                            document.getElementById('total').innerText = "Total: " + parseInt(total - t) + " SAR"

                        })

                    })
                }
            }

            document.getElementById('mycart').addEventListener('click', function() {
                const item = document.querySelector(".items")
                item.classList.add("hidden-items");
                document.getElementById("formCart").style.display = "block";
                document.getElementById("formCart").style.display = "block";
                document.getElementById('mycart').addEventListener('click', function() {

                })
            })
            document.getElementById('continue').addEventListener('click', function() {
                window.open("index.html");
            })
            document.getElementById('chekout').addEventListener('click', function() {
                const formInof = document.querySelector(".info")
                formInof.classList.remove("hidden-info");
            })

        })
    })