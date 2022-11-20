const getEl = (e) => document.querySelector(e)

// show / hide nav on mobile
const menu = getEl('#hamburger-menu')
const navMenu = getEl('#nav-menu')

menu.addEventListener('click', () => {
  navMenu.classList.toggle('hide-nav')
  navMenu.classList.toggle('show-nav')
  console.log('hello')
})
