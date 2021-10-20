fetch('https://api-mobilespecs.azharimm.site/v2/brands/apple-phones-48?page=2')
    .then(function(response) {
        return response.json()

    })
    .then(function(json) {
        let pro1 = document.getElementById('grid-container')
        let price

        // let allP = document.createElement('button')
        // allP.className = 'allP1'
        // allP.id = 'allP1'
        // allP.innerText = "All Product "
        // pro1.appendChild(allP)
        let index
        let pic = document.createElement('img')
        let name2 = document.createElement('h5')
        let i

        document.getElementById('ipad').addEventListener('click', function() {
            num = 0
                //iPad1 
            for (i = 0; i < json.data.phones.length; i++) {
                //     if (i === 0 || i === 7 || i === 9) {

                //iPad 9.7 (2018)

                let p1 = document.createElement('img')
                let g1 = document.createElement('div')
                g1.className = 'grid-item'
                pro1.appendChild(g1)
                p1.className = 'img1'
                p1.src = json.data.phones[i].image
                p1.style = 'width: 100px'

                let h = document.createElement('h4')
                h.className = 'name1'
                h.innerText = json.data.phones[i].phone_name
                let pr = document.createElement('h5')
                pr.className = 'price1'
                price = Math.floor(Math.random() * (3000 - 2000 + 1) + 2000)
                pr.innerText = 'Price:' + price + ' SAR'
                let cart = document.createElement('button')
                cart.id = 'shop'
                cart.className = 'cart1 '
                cart.innerText = 'Add to cart'

                g1.appendChild(p1)
                g1.appendChild(h)
                g1.appendChild(pr)
                g1.appendChild(cart)

                num = i
                pic = p1
                    // name2 = n

                // cart.addEventListener('click', function() {
                //     index = i
                //     console.log('in');
                //     carts(index)
                //     console.log('out');
                // })

                let arr = document.querySelectorAll(".grid-item")
                    //  console.log(arr[i]);
                    //name1
                let x = arr[i].getElementsByClassName('cart1')[0]
                for (let j = i; j <= i; j++) {

                    x.addEventListener('click', function() {
                        console.log(j + "ssssssssssssssssss");
                        // console.log(i + "ssssssssssssssssss");
                        let rra = document.querySelectorAll(".grid-item")
                        console.log('?????????????');
                        let d1 = document.createElement('div')
                        pro1.appendChild(d1)
                        let im = document.createElement('img')
                            // console.log(rra[i].getElementsByClassName(('img1')[0]));
                        let sr = rra[j].getElementsByClassName('img1')[0]
                        im.src = sr.src
                        let name2 = rra[j].getElementsByClassName('name1')[0]
                        let name = document.createElement('h5')
                        name.innerText = name2.innerText

                        let pr = document.createElement('h5')
                        let prr = rra[j].getElementsByClassName('price1')[0]
                        pr.innerText = prr.innerText
                        d1.appendChild(name)
                        d1.appendChild(im)
                        d1.appendChild(pr)
                        d1.style = 'background-color:wihte'

                    })
                }

            }

            // document.getElementById('shop').addEventListener('click', carts(num))

            // function carts(index) {
            //     console.log('?????????????');
            //     let d1 = document.createElement('div')
            //     pro1.appendChild(d1)
            //     let im = document.createElement('img')
            //     im = pic
            //         // let name = document.createElement('h5')
            //         // name = name2

            //     let pr = document.createElement('h5')
            //     pr.innerText = price
            //         // d1.appendChild(name)
            //     d1.appendChild(im)
            //     d1.appendChild(pr)
            //     d1.style = 'background-color:wihte'


            // }

            // arr[0]

        })


        //End
    })




//         //cart.style = 'border: 2 px solid white  background-color: white color: black padding: 14 px 28 px  font - size: 16 px cursor: pointer'
//         // cart.style = ' background: linear-gradient(to bottom right, #c6dfe6, #61a0c5);'

//         //     button class = "btn cart " > Add to cart < /button>


//         //iPad Pro 12.9 (2017
//         let g2 = document.createElement('div')
//         g2.className = 'grid-item '
//         pro1.appendChild(g2)
//         let p2 = document.createElement('img')
//         p2.src = json.data.phones[7].image
//         p1.style = 'width: 20 px'
//         let n2 = json.data.phones[7].phone_name
//         let h2 = document.createElement('h4')
//         h2.innerText = n2
//         let price2 = 2434.15
//         let pr2 = document.createElement('h5')
//         pr2.innerText = 'Price:' + price2 + ' SAR'
//         g2.appendChild(p2)
//         g2.appendChild(h2)
//         g2.appendChild(pr2)
//         let cart2 = document.createElement('button')
//         cart2.className = 'cart1 '
//         cart2.innerText = 'Add to cart'
//         g2.appendChild(cart2)

//         //iPad Pro 10.5 (2017)
//         let g3 = document.createElement('div')
//         g3.className = 'grid-item '
//         pro1.appendChild(g3)
//         let p3 = document.createElement('img')
//         p3.src = json.data.phones[8].image
//         p3.style = 'width: 20 px'
//         let n3 = json.data.phones[8].phone_name
//         let h3 = document.createElement('h4')
//         h3.innerText = n3
//         let price3 = 1233.95
//         let pr3 = document.createElement('h5')
//         pr3.innerText = 'Price:' +
//             price + ' SAR'
//         g3.appendChild(p3)
//         g3.appendChild(h3)
//         g3.appendChild(pr3)
//         let cart3 = document.createElement('button')
//         cart3.className = 'cart1 '
//         cart3.innerText = 'Add to cart'
//         g3.appendChild(cart3)

//         //iPad 9.7 (2017)
//         let g4 = document.createElement('div')
//         g4.className = 'grid-item '
//         pro1.appendChild(g4)
//         let p4 = document.createElement('img')
//         p4.src = json.data.phones[9].image
//         p4.style = 'width: 20 px'
//         let n4 = json.data.phones[9].phone_name
//         let h4 = document.createElement('h4')
//         h4.innerText = n4
//         let price4 = 1233.95
//         let pr4 = document.createElement('h5')
//         pr4.innerText = price + ' SAR'
//         g4.appendChild(p4)
//         g4.appendChild(h4)
//         g4.appendChild(pr4)
//         let cart4 = document.createElement('button')
//         cart4.className = 'cart1 '
//         cart4.innerText = 'Add to cart'
//         g4.appendChild(cart4)

//         //iPad Pro 9.7 (2016)
//         let g5 = document.createElement('div')
//         g5.className = 'grid-item '
//         pro1.appendChild(g5)
//         let p5 = document.createElement('img')
//         p5.src = json.data.phones[20].image
//         p5.style = 'width: 20 px'
//         let n5 = json.data.phones[20].phone_name
//         let h5 = document.createElement('h4')
//         h5.innerText = n5
//         let price5 = 1233.95
//         let pr5 = document.createElement('h5')
//         pr5.innerText = price5 + ' SAR'
//         g5.appendChild(p5)
//         g5.appendChild(h5)
//         g5.appendChild(pr5)
//         let cart5 = document.createElement('button')
//         cart5.className = 'cart1 '
//         cart5.innerText = 'Add to cart'
//         g5.appendChild(cart5)

//         //iPad Pro 12.9 (2015)
//         let g6 = document.createElement('div')
//         g6.className = 'grid-item '
//         pro1.appendChild(g6)
//         let p6 = document.createElement('img')
//         p6.src = json.data.phones[24].image
//         p6.style = 'width: 20 px'
//         let n6 = json.data.phones[24].phone_name
//         let h6 = document.createElement('h4')
//         h6.innerText = n6
//         let price6 = 1233.95
//         let pr6 = document.createElement('h5')
//         pr6.innerText = price + ' SAR'
//         g6.appendChild(p6)
//         g6.appendChild(h6)
//         g6.appendChild(pr6)
//         let cart6 = document.createElement('button')
//         cart6.className = 'cart1 '
//         cart6.innerText = 'Add to cart'
//         g6.appendChild(cart6)


//         //iPad mini 4 (2015)
//         let g7 = document.createElement('div')
//         g7.className = 'grid-item '
//         pro1.appendChild(g7)
//         let p7 = document.createElement('img')
//         p7.src = json.data.phones[25].image
//         p7.style = 'width: 20 px'
//         let n7 = json.data.phones[25].phone_name
//         let h7 = document.createElement('h4')
//         h7.innerText = n7
//         let price7 = 1233.95
//         let pr7 = document.createElement('h5')
//         pr7.innerText = price + ' SAR'
//         g7.appendChild(p7)
//         g7.appendChild(h7)
//         g7.appendChild(pr7)
//         let cart7 = document.createElement('button')
//         cart7.className = 'cart1 '
//         cart7.innerText = 'Add to cart'
//         g7.appendChild(cart7)

//         //iPad Air 2
//         let g8 = document.createElement('div')
//         g8.className = 'grid-item '
//         pro1.appendChild(g8)
//         let p8 = document.createElement('img')
//         p8.src = json.data.phones[32].image
//         p8.style = 'width: 20 px'
//         let n8 = json.data.phones[32].phone_name
//         let h8 = document.createElement('h4')
//         h8.innerText = n8
//         let price8 = 1233.95
//         let pr8 = document.createElement('h5')
//         pr8.innerText = price + ' SAR'
//         g8.appendChild(p8)
//         g8.appendChild(h8)
//         g8.appendChild(pr8)
//         let cart8 = document.createElement('button')
//         cart8.className = 'cart1 '
//         cart8.innerText = 'Add to cart'
//         g8.appendChild(cart8)


//         //iPad mini 3
//         let g9 = document.createElement('div')
//         g9.className = 'grid-item '
//         pro1.appendChild(g9)
//         let p9 = document.createElement('img')
//         p9.src = json.data.phones[33].image
//         p9.style = 'width: 20 px'
//         let n9 = json.data.phones[33].phone_name
//         let h9 = document.createElement('h4')
//         h9.innerText = n9
//         let price9 = 1233.95
//         let pr9 = document.createElement('h5')
//         pr9.innerText = price + ' SAR'
//         g9.appendChild(p9)
//         g9.appendChild(h9)
//         g9.appendChild(pr9)
//         let cart9 = document.createElement('button')
//         cart9.className = 'cart1 '
//         cart9.innerText = 'Add to cart'
//         g9.appendChild(cart9)


//         //iPad Air
//         let g10 = document.createElement('div')
//         g10.className = 'grid-item '
//         pro1.appendChild(g10)
//         let p10 = document.createElement('img')
//         p10.src = json.data.phones[36].image
//         p10.style = 'width: 20 px'
//         let n10 = json.data.phones[36].phone_name
//         let h10 = document.createElement('h4')
//         h10.innerText = n10
//         let price10 = 1233.95
//         let pr10 = document.createElement('h5')
//         pr10.innerText = price + ' SAR'
//         g10.appendChild(p10)
//         g10.appendChild(h10)
//         g10.appendChild(pr10)
//         console.log(json.data.phones[0]);
//         let cart10 = document.createElement('button')
//         cart10.className = 'cart1 '
//         cart10.innerText = 'Add to cart'
//         g10.appendChild(cart10)

//         //iPad mini 2
//         let g11 = document.createElement('div')
//         g11.className = 'grid-item '
//         pro1.appendChild(g11)
//         let p11 = document.createElement('img')
//         p11.src = json.data.phones[37].image
//         p11.style = 'width: 20 px'
//         let n11 = json.data.phones[37].phone_name
//         let h11 = document.createElement('h4')
//         h11.innerText = n11
//         let price11 = 1233.95
//         let pr11 = document.createElement('h5')
//         pr11.innerText = price + ' SAR'
//         g11.appendChild(p11)
//         g11.appendChild(h11)
//         g11.appendChild(pr11)
//         console.log(json.data.phones[0]);
//         let cart11 = document.createElement('button')
//         cart11.className = 'cart1 '
//         cart11.innerText = 'Add to cart'
//         g11.appendChild(cart11)

//         // }
//         //continue

//         // }

//     }) let iphoneCart1 = document.createElement('button'),
//         iphoneCart2 = document.createElement('button'),
//         iphoneCart3 = document.createElement('button'),
//         iphoneCart4 = document.createElement('button'),
//         iphoneCart5 = document.createElement('button'),
//         iphoneCart6 = document.createElement('button'),
//         iphoneCart7 = document.createElement('button'),
//         iphoneCart8 = document.createElement('button'),
//         iphoneCart9 = document.createElement('button'),
//         iphoneCart10 = document.createElement('button'),
//         iphoneCart11 = document.createElement('button'),
//         iphoneCart12 = document.createElement('button')




//     document.getElementById('iphone').addEventListener('click', function() {

//         //iPhone1
//         //for (i = 0; i < 40; i++) {
//         // if (i === 0 || i === 7 || i === 9) {

//         //iPhone X
//         let pro1 = document.getElementById('grid-container1')
//         let p1 = document.createElement('img')
//         let g1 = document.createElement('div')
//         g1.className = 'grid-item '
//         pro1.appendChild(g1)
//         p1.src = json.data.phones[1].image
//         p1.style = 'width: 100px'
//         let n = json.data.phones[1].phone_name
//         let h = document.createElement('h4')
//         h.innerText = n
//         let price = 1233.95
//         let pr = document.createElement('h5')
//         pr.innerText = price + ' SAR'
//         g1.appendChild(p1)
//         g1.appendChild(h)
//         g1.appendChild(pr)
//         iphoneCart1.className = 'cart1 '
//         iphoneCart2.id = 'phone1'
//         iphoneCart1.innerText = 'Add to cart'
//         g1.appendChild(iphoneCart1)

//         //iPhone 8 Plus
//         let g2 = document.createElement('div')
//         g2.className = 'grid-item '
//         pro1.appendChild(g2)
//         let p2 = document.createElement('img')
//         p2.src = json.data.phones[2].image
//         p1.style = 'width: 20 px'
//         let n2 = json.data.phones[2].phone_name
//         let h2 = document.createElement('h4')
//         h2.innerText = n2
//         let price2 = 1233.95
//         let pr2 = document.createElement('h5')
//         pr2.innerText = price2 + ' SAR'
//         g2.appendChild(p2)
//         g2.appendChild(h2)
//         g2.appendChild(pr2)
//         iphoneCart2.className = 'cart1 '
//         iphoneCart2.id = 'phone2'
//         iphoneCart2.innerText = 'Add to cart'
//         g2.appendChild(iphoneCart2)
//             //iPhone 8
//         let g3 = document.createElement('div')
//         g3.className = 'grid-item '
//         pro1.appendChild(g3)
//         let p3 = document.createElement('img')
//         p3.src = json.data.phones[3].image
//         p3.style = 'width: 20 px'
//         let n3 = json.data.phones[3].phone_name
//         let h3 = document.createElement('h4')
//         h3.innerText = n3
//         let price3 = 1233.95
//         let pr3 = document.createElement('h5')
//         pr3.innerText = price + ' SAR'
//         g3.appendChild(p3)
//         g3.appendChild(h3)
//         g3.appendChild(pr3)
//         iphoneCart3.className = 'cart1 '
//         iphoneCart3.id = 'phone3'
//         iphoneCart3.innerText = 'Add to cart'
//         g3.appendChild(iphoneCart3)
//             //   console.log(pr3);
//             //iPhone 7 Plus
//         let g4 = document.createElement('div')
//         g4.className = 'grid-item '
//         pro1.appendChild(g4)
//         let p4 = document.createElement('img')
//         p4.src = json.data.phones[18].image
//         p4.style = 'width: 20 px'
//         let n4 = json.data.phones[18].phone_name
//         let h4 = document.createElement('h4')
//         h4.innerText = n4
//         let price4 = 1233.95
//         let pr4 = document.createElement('h5')
//         pr4.innerText = price + ' SAR'
//         g4.appendChild(p4)
//         g4.appendChild(h4)
//         g4.appendChild(pr4)
//         iphoneCart4.className = 'cart1 '
//         iphoneCart4.id = 'phone4'
//         iphoneCart4.innerText = 'Add to cart'
//         g4.appendChild(iphoneCart4)
//             //   console.log(pr4);

//         //iPhone 7
//         let g5 = document.createElement('div')
//         g5.className = 'grid-item '
//         pro1.appendChild(g5)
//         let p5 = document.createElement('img')
//         p5.src = json.data.phones[19].image
//         p5.style = 'width: 20 px'
//         let n5 = json.data.phones[19].phone_name
//         let h5 = document.createElement('h4')
//         h5.innerText = n5
//         let price5 = 1233.95
//         let pr5 = document.createElement('h5')
//         pr5.innerText = price5 + ' SAR'
//         g5.appendChild(p5)
//         g5.appendChild(h5)
//         g5.appendChild(pr5)
//         iphoneCart5.className = 'cart1 '
//         iphoneCart5.id = 'phone5'
//         iphoneCart5.innerText = 'Add to cart'
//         g5.appendChild(iphoneCart5)


//         //iPhone SE
//         let g6 = document.createElement('div')
//         g6.className = 'grid-item '
//         pro1.appendChild(g6)
//         let p6 = document.createElement('img')
//         p6.src = json.data.phones[21].image
//         p6.style = 'width: 20 px'
//         let n6 = json.data.phones[21].phone_name
//         let h6 = document.createElement('h4')
//         h6.innerText = n6
//         let price6 = 1233.95
//         let pr6 = document.createElement('h5')
//         pr6.innerText = price + ' SAR'
//         g6.appendChild(p6)
//         g6.appendChild(h6)
//         g6.appendChild(pr6)
//         iphoneCart6.className = 'cart1 '
//         iphoneCart6.id = 'phone6'
//         iphoneCart6.innerText = 'Add to cart'
//         g6.appendChild(iphoneCart6)



//         //iPhone 6s Plus
//         let g7 = document.createElement('div')
//         g7.className = 'grid-item '
//         pro1.appendChild(g7)
//         let p7 = document.createElement('img')
//         p7.src = json.data.phones[22].image
//         p7.style = 'width: 20 px'
//         let n7 = json.data.phones[22].phone_name
//         let h7 = document.createElement('h4')
//         h7.innerText = n7
//         let price7 = 1233.95
//         let pr7 = document.createElement('h5')
//         pr7.innerText = price + ' SAR'
//         g7.appendChild(p7)
//         g7.appendChild(h7)
//         g7.appendChild(pr7)
//         iphoneCart7.className = 'cart1 '
//         iphoneCart7.id = 'phone7'
//         iphoneCart7.innerText = 'Add to cart'
//         g7.appendChild(iphoneCart7)

//         //iPhone 6s
//         let g8 = document.createElement('div')
//         g8.className = 'grid-item '
//         pro1.appendChild(g8)
//         let p8 = document.createElement('img')
//         p8.src = json.data.phones[23].image
//         p8.style = 'width: 20 px'
//         let n8 = json.data.phones[23].phone_name
//         let h8 = document.createElement('h4')
//         h8.innerText = n8
//         let price8 = 1233.95
//         let pr8 = document.createElement('h5')
//         pr8.innerText = price + ' SAR'
//         g8.appendChild(p8)
//         g8.appendChild(h8)
//         g8.appendChild(pr8)
//         iphoneCart8.className = 'cart1 '
//         iphoneCart8.id = 'phone8'
//         iphoneCart8.innerText = 'Add to cart'
//         g8.appendChild(iphoneCart8)


//         //iPhone 6 Plus
//         let g9 = document.createElement('div')
//         g9.className = 'grid-item '
//         pro1.appendChild(g9)
//         let p9 = document.createElement('img')
//         p9.src = json.data.phones[34].image
//         p9.style = 'width: 20 px'
//         let n9 = json.data.phones[34].phone_name
//         let h9 = document.createElement('h4')
//         h9.innerText = n9
//         let price9 = 1233.95
//         let pr9 = document.createElement('h5')
//         pr9.innerText = price + ' SAR'
//         g9.appendChild(p9)
//         g9.appendChild(h9)
//         g9.appendChild(pr9)
//         iphoneCart9.className = 'cart1 '
//         iphoneCart9.id = 'phone9'
//         iphoneCart9.innerText = 'Add to cart'
//         g9.appendChild(iphoneCart9)


//         //iPhone 6
//         let g10 = document.createElement('div')
//         g10.className = 'grid-item '
//         pro1.appendChild(g10)
//         let p10 = document.createElement('img')
//         p10.src = json.data.phones[35].image
//         p10.style = 'width: 20 px'
//         let n10 = json.data.phones[35].phone_name
//         let h10 = document.createElement('h4')
//         h10.innerText = n10
//         let price10 = 1233.95
//         let pr10 = document.createElement('h5')
//         pr10.innerText = price + ' SAR'
//         g10.appendChild(p10)
//         g10.appendChild(h10)
//         g10.appendChild(pr10)
//         iphoneCart10.className = 'cart1 '
//         iphoneCart10.id = 'phone10'
//         iphoneCart10.innerText = 'Add to cart'
//         g10.appendChild(iphoneCart10)


//         //iPhone 5s
//         let g11 = document.createElement('div')
//         g11.className = 'grid-item '
//         pro1.appendChild(g11)
//         let p11 = document.createElement('img')
//         p11.src = json.data.phones[38].image
//         p11.style = 'width: 20 px'
//         let n11 = json.data.phones[38].phone_name
//         let h11 = document.createElement('h4')
//         h11.innerText = n11
//         let price11 = 1233.95
//         let pr11 = document.createElement('h5')
//         pr11.innerText = price + ' SAR'
//         g11.appendChild(p11)
//         g11.appendChild(h11)
//         g11.appendChild(pr11)
//         iphoneCart11.className = 'cart1 '
//         iphoneCart11.id = 'phone11'
//         iphoneCart11.innerText = 'Add to cart'
//         g11.appendChild(iphoneCart11)

//         // iPhone 5 c
//         let g12 = document.createElement('div')
//         g12.className = 'grid-item '
//         pro1.appendChild(g12)
//         let p12 = document.createElement('img')
//         p12.src = json.data.phones[39].image
//         p12.style = 'width: 20 px'
//         let n12 = json.data.phones[39].phone_name
//         let h12 = document.createElement('h4')
//         h12.innerText = n12
//         let price12 = 1233.95
//         let pr12 = document.createElement('h5')
//         pr12.innerText = price + ' SAR'
//         g12.appendChild(p12)
//         g12.appendChild(h12)
//         g12.appendChild(pr12)
//         iphoneCart12.className = 'cart1 '
//         iphoneCart12.id = 'phone12'
//         iphoneCart12.innerText = 'Add to cart'
//         g12.appendChild(iphoneCart12)



//         // }
//         //continue

//         // }



//     })

//     let wCart1 = document.createElement('button'),
//         wCart2 = document.createElement('button'),
//         wCart3 = document.createElement('button'),
//         wCart4 = document.createElement('button'),
//         wCart5 = document.createElement('button'),
//         wCart6 = document.createElement('button'),
//         wCart7 = document.createElement('button'),
//         wCart8 = document.createElement('button'),
//         wCart9 = document.createElement('button'),
//         wCart10 = document.createElement('button'),
//         wCart11 = document.createElement('button'),
//         wCart12 = document.createElement('button'),
//         wCart13 = document.createElement('button'),
//         wCart14 = document.createElement('button'),
//         wCart15 = document.createElement('button'),
//         wCart16 = document.createElement('button')
//     document.getElementById('watch').addEventListener('click', function() {


//         //for (i = 0; i < 40; i++) {
//         // if (i === 0 || i === 7 || i === 9) {

//         //Watch Edition Series 3
//         let pro1 = document.getElementById('grid-container2')
//         let p1 = document.createElement('img')
//         let g1 = document.createElement('div')
//         g1.className = 'grid-item '
//         pro1.appendChild(g1)
//         p1.src = json.data.phones[4].image
//         p1.style = 'width: 100px'
//         let n = json.data.phones[4].phone_name
//         let h = document.createElement('h4')
//         h.innerText = n
//         let price = 1000
//         let pr = document.createElement('h5')
//         pr.innerText = price + ' SAR'
//         g1.appendChild(p1)
//         g1.appendChild(h)
//         g1.appendChild(pr)
//         wCart1.className = 'cart1 '
//         wCart1.id = 'watch1'
//         wCart1.innerText = 'Add to cart'
//         g1.appendChild(wCart1)



//         //Watch Series 3
//         let g2 = document.createElement('div')
//         g2.className = 'grid-item '
//         pro1.appendChild(g2)
//         let p2 = document.createElement('img')
//         p2.src = json.data.phones[5].image
//         p1.style = 'width: 20 px'
//         let n2 = json.data.phones[5].phone_name
//         let h2 = document.createElement('h4')
//         h2.innerText = n2
//         let price2 = 2000
//         let pr2 = document.createElement('h5')
//         pr2.innerText = price2 + ' SAR'
//         g2.appendChild(p2)
//         g2.appendChild(h2)
//         g2.appendChild(pr2)
//         wCart2.className = 'cart1 '
//         wCart2.id = 'watch2'
//         wCart2.innerText = 'Add to cart'
//         g2.appendChild(wCart2)

//         //Watch Series 3 Aluminum
//         let g3 = document.createElement('div')
//         g3.className = 'grid-item '
//         pro1.appendChild(g3)
//         let p3 = document.createElement('img')
//         p3.src = json.data.phones[6].image
//         p3.style = 'width: 20 px'
//         let n3 = json.data.phones[6].phone_name
//         let h3 = document.createElement('h4')
//         h3.innerText = n3
//         let price3 = 1233.95
//         let pr3 = document.createElement('h5')
//         pr3.innerText = price3 + ' SAR'
//         g3.appendChild(p3)
//         g3.appendChild(h3)
//         g3.appendChild(pr3)
//         wCart3.className = 'cart1 '
//         wCart3.id = 'watch3'
//         wCart3.innerText = 'Add to cart'
//         g3.appendChild(wCart3)

//         //Watch Edition Series 2 42mm
//         let g4 = document.createElement('div')
//         g4.className = 'grid-item '
//         pro1.appendChild(g4)
//         let p4 = document.createElement('img')
//         p4.src = json.data.phones[10].image
//         p4.style = 'width: 20 px'
//         let n4 = json.data.phones[10].phone_name
//         let h4 = document.createElement('h4')
//         h4.innerText = n4
//         let price4 = 1233.95
//         let pr4 = document.createElement('h5')
//         pr4.innerText = price4 + ' SAR'
//         g4.appendChild(p4)
//         g4.appendChild(h4)
//         g4.appendChild(pr4)
//         wCart4.className = 'cart1 '
//         wCart4.id = 'watch3'
//         wCart4.innerText = 'Add to cart'
//         g4.appendChild(wCart4)


//         //Watch Edition Series 2 38mm
//         let g5 = document.createElement('div')
//         g5.className = 'grid-item '
//         pro1.appendChild(g5)
//         let p5 = document.createElement('img')
//         p5.src = json.data.phones[11].image
//         p5.style = 'width: 20 px'
//         let n5 = json.data.phones[11].phone_name
//         let h5 = document.createElement('h4')
//         h5.innerText = n5
//         let price5 = 1233.95
//         let pr5 = document.createElement('h5')
//         pr5.innerText = price5 + ' SAR'
//         g5.appendChild(p5)
//         g5.appendChild(h5)
//         g5.appendChild(pr5)
//         wCart5.className = 'cart1 '
//         wCart5.id = 'watch5'
//         wCart5.innerText = 'Add to cart'
//         g5.appendChild(wCart5)

//         //Watch Series 2 42mm
//         let g6 = document.createElement('div')
//         g6.className = 'grid-item '
//         pro1.appendChild(g6)
//         let p6 = document.createElement('img')
//         p6.src = json.data.phones[12].image
//         p6.style = 'width: 20 px'
//         let n6 = json.data.phones[12].phone_name
//         let h6 = document.createElement('h4')
//         h6.innerText = n6
//         let price6 = 1233.95
//         let pr6 = document.createElement('h5')
//         pr6.innerText = price6 + ' SAR'
//         g6.appendChild(p6)
//         g6.appendChild(h6)
//         g6.appendChild(pr6)
//         wCart6.className = 'cart1 '
//         wCart6.id = 'watch6'
//         wCart6.innerText = 'Add to cart'
//         g6.appendChild(wCart6)


//         //Watch Series 2 38mm
//         let g7 = document.createElement('div')
//         g7.className = 'grid-item '
//         pro1.appendChild(g7)
//         let p7 = document.createElement('img')
//         p7.src = json.data.phones[13].image
//         p7.style = 'width: 20 px'
//         let n7 = json.data.phones[13].phone_name
//         let h7 = document.createElement('h4')
//         h7.innerText = n7
//         let price7 = 1233.95
//         let pr7 = document.createElement('h5')
//         pr7.innerText = price7 + ' SAR'
//         g7.appendChild(p7)
//         g7.appendChild(h7)
//         g7.appendChild(pr7)
//         wCart7.className = 'cart1 '
//         wCart7.id = 'watch7'
//         wCart7.innerText = 'Add to cart'
//         g7.appendChild(wCart7)

//         //Watch Series 2 Aluminum 42mm
//         let g8 = document.createElement('div')
//         g8.className = 'grid-item '
//         pro1.appendChild(g8)
//         let p8 = document.createElement('img')
//         p8.src = json.data.phones[14].image
//         p8.style = 'width: 20 px'
//         let n8 = json.data.phones[14].phone_name
//         let h8 = document.createElement('h4')
//         h8.innerText = n8
//         let price8 = 1233.95
//         let pr8 = document.createElement('h5')
//         pr8.innerText = price8 + ' SAR'
//         g8.appendChild(p8)
//         g8.appendChild(h8)
//         g8.appendChild(pr8)
//         wCart8.className = 'cart1 '
//         wCart8.id = 'watch8'
//         wCart8.innerText = 'Add to cart'
//         g8.appendChild(wCart8)


//         //Watch Series 2 Aluminum 38mm
//         let g9 = document.createElement('div')
//         g9.className = 'grid-item '
//         pro1.appendChild(g9)
//         let p9 = document.createElement('img')
//         p9.src = json.data.phones[16].image
//         p9.style = 'width: 20 px'
//         let n9 = json.data.phones[16].phone_name
//         let h9 = document.createElement('h4')
//         h9.innerText = n9
//         let price9 = 1233.95
//         let pr9 = document.createElement('h5')
//         pr9.innerText = price9 + ' SAR'
//         g9.appendChild(p9)
//         g9.appendChild(h9)
//         g9.appendChild(pr9)
//         wCart9.className = 'cart1 '
//         wCart9.id = 'watch9'
//         wCart9.innerText = 'Add to cart'
//         g9.appendChild(wCart9)

//         //Watch Series 1 Aluminum 38mm
//         let g10 = document.createElement('div')
//         g10.className = 'grid-item '
//         pro1.appendChild(g10)
//         let p10 = document.createElement('img')
//         p10.src = json.data.phones[17].image
//         p10.style = 'width: 20 px'
//         let n10 = json.data.phones[17].phone_name
//         let h10 = document.createElement('h4')
//         h10.innerText = n10
//         let price10 = 10
//         let pr10 = document.createElement('h5')
//         pr10.innerText = price10 + ' SAR'
//         g10.appendChild(p10)
//         g10.appendChild(h10)
//         g10.appendChild(pr10)
//         wCart10.className = 'cart1 '
//         wCart10.id = 'watch10'
//         wCart10.innerText = 'Add to cart'
//         g10.appendChild(wCart10)


//         //Watch Edition 42mm (1st gen)

//         let g11 = document.createElement('div')
//         g11.className = 'grid-item '
//         pro1.appendChild(g11)
//         let p11 = document.createElement('img')
//         p11.src = json.data.phones[26].image
//         p11.style = 'width: 20 px'
//         let n11 = json.data.phones[26].phone_name
//         let h11 = document.createElement('h4')
//         h11.innerText = n11
//         let price11 = 11
//         let pr11 = document.createElement('h5')
//         pr11.innerText = price11 + ' SAR'
//         g11.appendChild(p11)
//         g11.appendChild(h11)
//         g11.appendChild(pr11)
//         wCart11.className = 'cart1 '
//         wCart11.id = 'watch11'
//         wCart11.innerText = 'Add to cart'
//         g11.appendChild(wCart11)


//         //Watch Edition 38mm (1st gen)
//         let g12 = document.createElement('div')
//         g12.className = 'grid-item '
//         pro1.appendChild(g12)
//         let p12 = document.createElement('img')
//         p12.src = json.data.phones[27].image
//         p12.style = 'width: 20 px'
//         let n12 = json.data.phones[27].phone_name
//         let h12 = document.createElement('h4')
//         h12.innerText = n12
//         let price12 = 12
//         let pr12 = document.createElement('h5')
//         pr12.innerText = price12 + ' SAR'
//         g12.appendChild(p12)
//         g12.appendChild(h12)
//         g12.appendChild(pr12)
//         wCart12.className = 'cart1 '
//         wCart12.id = 'watch12'
//         wCart12.innerText = 'Add to cart'
//         g12.appendChild(wCart12)



//         // // //proplem
//         // let g13 = document.createElement('div')
//         // g13.className = 'grid-item '
//         // pro1.appendChild(g13)
//         // let p13 = document.createElement('img')
//         // p13.src = json.data.phones[28].image
//         // p13.style = 'width: 1 px'
//         // let n13 = json.data.phones[28].phone_name
//         // let h13 = document.createElement('h4')
//         // h13.innerText = n13
//         // let price13 = 13
//         // let pr13 = document.createElement('h5')
//         // pr13.innerText = price13 + ' SAR'
//         // g13.appendChild(p13)
//         // g13.appendChild(h13)
//         // g13.appendChild(pr13)



//         //Watch 38mm (1st gen)
//         let g14 = document.createElement('div')
//         g14.className = 'grid-item '
//         pro1.appendChild(g14)
//         let p14 = document.createElement('img')
//         p14.src = json.data.phones[29].image
//         p14.style = 'width: 20 px'
//         let n14 = json.data.phones[29].phone_name
//         let h14 = document.createElement('h4')
//         h14.innerText = n14
//         let price14 = 14
//         let pr14 = document.createElement('h5')
//         pr14.innerText = price14 + ' SAR'
//         g14.appendChild(p14)
//         g14.appendChild(h14)
//         g14.appendChild(pr14)
//         wCart14.className = 'cart1 '
//         wCart14.id = 'watch14'
//         wCart14.innerText = 'Add to cart'
//         g14.appendChild(wCart14)


//         //Watch Sport 42mm (1st gen)
//         let g15 = document.createElement('div')
//         g15.className = 'grid-item '
//         pro1.appendChild(g15)
//         let p15 = document.createElement('img')
//         p15.src = json.data.phones[30].image
//         p15.style = 'width: 20 px'
//         let n15 = json.data.phones[30].phone_name
//         let h15 = document.createElement('h4')
//         h15.innerText = n15
//         let price15 = 15
//         let pr15 = document.createElement('h5')
//         pr15.innerText = price15 + ' SAR'
//         g15.appendChild(p15)
//         g15.appendChild(h15)
//         g15.appendChild(pr15)
//         wCart15.className = 'cart1 '
//         wCart15.id = 'watch15'
//         wCart15.innerText = 'Add to cart'
//         g15.appendChild(wCart15)

//         //Watch Sport 38 mm(1 st gen)
//         let g16 = document.createElement('div')
//         g16.className = 'grid-item '
//         pro1.appendChild(g16)
//         let p16 = document.createElement('img')
//         p16.src = json.data.phones[31].image
//         p16.style = 'width: 20 px'
//         let n16 = json.data.phones[31].phone_name
//         let h16 = document.createElement('h4')
//         h16.innerText = n16
//         let price16 = 16
//         let pr16 = document.createElement('h5')
//         pr16.innerText = price16 + ' SAR'
//         g16.appendChild(p16)
//         g16.appendChild(h16)
//         g16.appendChild(pr16)
//         wCart16.className = 'cart1 '
//         wCart16.id = 'watch16'
//         wCart16.innerText = 'Add to cart'
//         g16.appendChild(wCart16)


//         // }
//         //continue

//         // }

//     })

//   // })
//   // })
//   // })