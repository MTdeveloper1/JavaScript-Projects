let menuBtn = document.getElementById('menuBtn')
let navClass = document.querySelector('.show')

menuBtn.addEventListener('click', () => {
    navClass.classList.toggle('show')
})