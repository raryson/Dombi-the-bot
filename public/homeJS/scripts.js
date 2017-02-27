const dombiButton = document.querySelector('#dombi')
const peopleButton = document.querySelector('#people')

dombiButton.addEventListener('click', function () {
  window.location.href = '/dombi'
})

peopleButton.addEventListener('click', function () {
  window.location.href = '/people'
})

