<<<<<<< HEAD
create = () => {
    let main = document.createElement('main');
    let div = document.createElement('div');
    let section = document.createElement('section');

    for (const elt of sneaker) {

        let imgSection = document.createElement('section');
        
        for (let pic = 0; pic < elt.picture.length; pic++) {     
            let image = document.createElement('img');
            image.src = elt.picture[pic];
            imgSection.appendChild(image);
        }
    

        for (let thumb = 0; thumb < elt.thumbnail.length; thumb++) {   
            let thumbnail = document.createElement('img');
            thumbnail.src = elt.thumbnail[thumb];
            imgSection.appendChild(thumbnail);
        }
        section.appendChild(imgSection);

        let mark = document.createElement('p');
        mark.innerText = elt.mark;
        section.appendChild(mark);

        let name = document.createElement('p');
        name.innerText = elt.name;
        section.appendChild(name);

        let description = document.createElement('p');
        description.innerText = elt.description;
        section.appendChild(description);

        let price = document.createElement('p');
        price.innerText = elt.price;

    }
    div.appendChild(section);
    main.appendChild(div);
    console.log(main);
    document.body.appendChild(main);
}
create ();
=======
// return home button

let retrunButton = document.querySelector(".return")

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      retrunButton.style.display = "block";
    } else {
      retrunButton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  } 

  retrunButton.addEventListener("click", e => {
      topFunction()
  })

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
>>>>>>> d7932d542922a030f2924fd3a76e028d381307ec
