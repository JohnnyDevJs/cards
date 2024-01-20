const openCards = document.getElementById('openCards')
const closeCards = document.getElementById('closeCards')
const content = document.querySelector('.content')

openCards.addEventListener('click', () => {
  content.classList.add('show')
})

closeCards.addEventListener('click', () => {
  content.classList.remove('show')
})