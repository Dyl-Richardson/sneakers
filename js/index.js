create = () => {
    let main = document.querySelector("main")
    for (const elt of sneaker) {

        let imgSection = document.createElement('section');
        imgSection.className = "product"

        let image = document.createElement('img');
        image.src = elt.picture[0];
        image.className = "collImg"
        imgSection.appendChild(image);

        let thumbGroup = document.createElement("p")
        thumbGroup.className = "thumbGroup"
        for (let thumb = 0; thumb < elt.thumbnail.length; thumb++) {
            let thumbnail = document.createElement('img');
            thumbnail.src = elt.thumbnail[thumb];
            thumbnail.className = "thumb"
            thumbGroup.appendChild(thumbnail);
        }
        imgSection.appendChild(thumbGroup)
        main.appendChild(imgSection);

        let textSection = document.createElement("section")
        textSection.className = "product"

        let mark = document.createElement('h4');
        mark.innerText = elt.mark;
        textSection.appendChild(mark);

        let name = document.createElement('h5');
        name.innerText = elt.name;
        textSection.appendChild(name);

        let description = document.createElement('p');
        description.innerText = elt.description;
        description.className = "desc"
        textSection.appendChild(description);

        let price = document.createElement('h6');

        if (elt.discount) {
            let percentage = document.createElement('div');
            percentage.innerText = elt.percentage + '%';
            percentage.className = "percentage"
            price.innerText = "$" + (elt.price * elt.percentage) / 100 + ".00";
            price.appendChild(percentage);
            textSection.appendChild(price)
            let oldPrice = document.createElement('h7');
            oldPrice.innerText = "$" + elt.price + ".00";
            textSection.appendChild(oldPrice);
        } else {
            textSection.appendChild(price)
            price.innerText = "$" + elt.price + ".00";
        }

        let div = document.createElement("div")
        let minus = document.createElement("button")
        minus.className = "minus"
        minus.innerText = "-"
        div.appendChild(minus)

        let input = document.createElement("input")
        input.type = "number"
        input.value = 0
        input.min = 0
        div.appendChild(input)

        let plus = document.createElement("button")
        plus.className = "plus"
        plus.innerText = "+"
        div.appendChild(plus)

        let cartButton = document.createElement("button")
        cartButton.className = "prodCart"
        let cartImg = document.createElement("img")
        cartImg.src = "./images/icon-cart.svg"
        cartImg.className = "prodCartImg"
        cartButton.innerHTML =
            cartButton.innerText = '<img src="./images/icon-cart.svg" alt="" class="prodCartImg">' + "Add to cart"
        div.appendChild(cartButton)
        textSection.appendChild(div)

        main.appendChild(textSection)
    }
}
create();

// Thumbnail
let thumbnail = document.getElementsByClassName("thumb")

for (let i = 0; i < thumbnail.length; i++) {
    thumbnail[i].addEventListener("click" , e => {
        thumbnail[i].style.borderStyle = "solid"
        thumbnail[i].style.borderColor = "orange"
        thumbnail[i].style.opacity = "75%"
        let image = document.querySelector(".collImg")
        image.src = "./images/image-product-" + [i] + ".jpg"
    })
}

// Quantity
let minus = document.querySelector(".minus")
minus.addEventListener("click", e => {
    let input = document.querySelector("input")
    let value = document.querySelector("input").value
    if (value > 0) {
        input.value = value - 1
    }
})

let plus = document.querySelector(".plus")
plus.addEventListener("click", e => {
    let input = document.querySelector("input")
    let value = document.querySelector("input").value
    let u = 1
    input.value = value++ + 1
})

// Panier
function showPanier() {
    document.querySelector(".cartList").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.cart')) {
        let dropdowns = document.getElementsByClassName("cartList");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

let cart = document.querySelector(".cart")
cart.addEventListener("click", e => {
    showPanier()
})

// Add to panier
let totalCart = 0

let prodCart = document.querySelector(".prodCart")
let panier = document.querySelector(".itemList")

prodCart.addEventListener("click", e => {
    let numberOfItem = document.querySelector("input").value
    let item = document.createElement("p")
    prodCart.appendChild(item)
    if (numberOfItem === "0") {
        
    }
    else if (sneaker[0].discount === false) {
        item.innerText = sneaker[0].name + " " + ": " + "$" + sneaker[0].price + "  x" + numberOfItem
        totalCart = totalCart + sneaker[0].price * numberOfItem
    }
    else {
        item.innerText = sneaker[0].name + " " + ": " + "$" + (sneaker[0].price / 100) * sneaker[0].percentage + "  x" + numberOfItem
        totalCart = totalCart + (sneaker[0].price / 100) * sneaker[0].percentage * numberOfItem
    }
    
    let total = document.querySelector(".totalCart")
    total.innerText = "Total : " + "$" + totalCart
    panier.appendChild(item)
})


// ! if (panier.textContent === ""){
// !     let panierHide = document.querySelector(".orderButton")
// !     panierHide.style.display = "none"
// !     panier.innerText = "Your cart is empty."
// !     if (panier.textContent === "Your cart is empty.") {
// !         panier.style.color = "grey"
// !     }
// ! }


// Panier clear button 
let clearButton = document.querySelector(".clear")

clearButton.addEventListener("click", e => {
    panier.innerText = ""
    let total = document.querySelector(".totalCart")
    totalCart = 0
    total.innerText = "Total : $" + totalCart
})

// Order button
let orderButton = document.querySelector(".order")

orderButton.addEventListener("click", e => {
    alert("Thank you for your order")
})

// Menu burger mobile 

function showMenuBurger() {
    document.querySelector(".mobileList").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.headerNavMobile')) {
        let dropdowns = document.getElementsByClassName("mobileList");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

let headerNavMobile = document.querySelector(".headerNavMobile")
headerNavMobile.addEventListener("click", e => {
    showMenuBurger()
})