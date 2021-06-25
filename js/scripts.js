

//Cerrar automaticamente el menu(mobile) al hacer click en algun item

var x = window.matchMedia("(max-width: 990px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

function myFunction(x) {
    if (x.matches) { // If media query matches
        const navLinks = [].slice.call(document.querySelectorAll('.nav-link'))
        const menuToggle = document.getElementById('navbarNavAltMarkup')

        var bsCollapse = new bootstrap.Collapse(menuToggle, {
            toggle: false
        })

        navLinks.forEach((l) => {
            l.addEventListener('click', () => { bsCollapse.toggle() })
        })
    } else {
    }
}



