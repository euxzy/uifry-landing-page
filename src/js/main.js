const getEl = (e) => document.querySelector(e)

// show / hide nav on mobile
const menu = getEl('#hamburger-menu')
const navMenu = getEl('#nav-menu')

menu.addEventListener('click', () => {
  menu.classList.toggle('close')
  navMenu.classList.toggle('hide-nav')
  navMenu.classList.toggle('show-nav')
})

// change background navbar on scroll
const header = getEl('header')
const hero = getEl('#hero')
const btnNav = getEl('#btn-nav')
const btnSignUp = getEl('#btn-signup')
const btnLogin = getEl('#btn-login')

window.onscroll = () => {
  if (window.pageYOffset > hero.offsetTop + 150) {
    header.classList.remove('md:bg-transparent')
    btnNav.classList.remove('md:text-black')
    btnSignUp.classList.remove('md:hover:border-black')
    btnLogin.classList.remove('md:border-black')
  } else {
    header.classList.add('md:bg-transparent')
    btnNav.classList.add('md:text-black')
    btnSignUp.classList.add('md:hover:border-black')
    btnLogin.classList.add('md:border-black')
  }
}
