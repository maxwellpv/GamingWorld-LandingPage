

//Cerrar automaticamente el menu(mobile) al hacer click en algun item
const navLinks = [].slice.call(document.querySelectorAll('.nav-link'))
const menuToggle = document.getElementById('navbarNavAltMarkup')

var bsCollapse = new bootstrap.Collapse(menuToggle, {
    toggle: false
})

navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})
