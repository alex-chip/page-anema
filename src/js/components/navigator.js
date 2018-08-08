const toggleMenu = (navId, menudId, toggleB) => {
    let nav = navId,
        menu = menuId,
        toggleButton = toggleB

    function showNav() {
        nav.classList.toggle('is-active')
    }

    if(nav) {
        if(toggleButton) {
            toggleButton.addEventListener('click', showNav)
        } else {
            console.log(`Not Foudn ${toggleButton}`)
        }
    } else {
        console.log(`Not found ${navId}`)
    }
}

const toggleB = document.getElementById('navId-toggle')
const menudId = document.getElementById('menuId')
const navId = document.getElementById('navId')

toggleMenu(navId, menudId, toggleB)
