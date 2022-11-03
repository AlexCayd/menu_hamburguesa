hamburguesa = document.getElementById('hamburguesa');
menu = document.getElementById('menu');
body = document.getElementById('body');
flecha = document.getElementById('menu-cerrar')

hamburguesa.addEventListener ('click', () => {
    menu.classList.toggle('active');
    body.classList.toggle('noscroll')

    if(menu.classList.contains('active')) {
        hamburguesa.style.transform = "rotate(90deg)"
        hamburguesa.style.transition = ".2s all"

    } else {
        hamburguesa.style.transform = "rotate(0deg)"
    }
}) 

flecha.addEventListener('click', () => {
    menu.classList.toggle('active'); 

    if(menu.classList.contains('active')) {
        hamburguesa.style.transform = "rotate(90deg)"
        hamburguesa.style.transition = ".2s all"

    } else {
        hamburguesa.style.transform = "rotate(0deg)"
    }
}) 

