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