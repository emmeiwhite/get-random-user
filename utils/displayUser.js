import get from './getElement.js'

const img = get('.user-img')
const title = get('.user-title')
const value = get('.user-value')

const buttons = [...document.querySelectorAll('.icon')]

const handleButtons = person => {
  buttons.forEach(btn => {
    const label = btn.dataset.label
    btn.addEventListener('click', e => {
      // Get value from the label
      title.textContent = `My ${label} is`
      value.textContent = person[label]

      buttons.forEach(btn => {
        btn.classList.remove('active')
      })

      btn.classList.add('active')
    })
  })
}

//2. To display User
const displayUser = person => {
  img.src = person.image
  title.textContent = `My Name is`
  value.textContent = person.name

  /** First remove active user from all the buttons */
  buttons.forEach(btn => {
    btn.classList.remove('active')
  })
  /** And then set the first user to active, since we have two cases where we show active user. On DOMContentLoaded event and on the click of Random User button */
  buttons[0].classList.add('active')

  handleButtons(person)
}

export default displayUser
