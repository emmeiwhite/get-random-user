import getUser from './utils/getUser.js'
import displayUser from './utils/displayUser.js'

const showUser = async () => {
  // 1) get user from api
  const person = await getUser()

  // 2) display user
  displayUser(person)
}

// load user api data on DOMContentLoaded and for the click of each Random button
window.addEventListener('DOMContentLoaded', showUser)

/** Show random user on click of each button as well */
import get from './utils/getElement.js'
const btn = get('.btn')
btn.addEventListener('click', showUser)
