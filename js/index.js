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
        textSection.appendChild(description);

        let price = document.createElement('h6');
        price.innerText = "$" + elt.price + ".00";
        textSection.appendChild(price)

        let div = document.createElement("div")
        let minus = document.createElement("button")
        minus.className = "minus"
        minus.innerText = "-"
        div.appendChild(minus)

        let input = document.createElement("input")
        input.type = "number"
        input.value = 0
        div.appendChild(input)

        let plus = document.createElement("button")
        plus.className = "plus"
        plus.innerText = "+"
        div.appendChild(plus)

        let cartButton = document.createElement("button")
        cartButton.className ="prodCart"
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
create ();


// Avatar menu
function show() {
    document.querySelector(".dropdownList").classList.toggle("show");
  }
  
window.onclick = function(event) {
    if (!event.target.matches('.avatar')) {
        let dropdowns = document.getElementsByClassName("dropdownList");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
        }
    }
} 

  let avatar = document.querySelector(".avatar")
  avatar.addEventListener("click", e => {
      show()
  })
