import get from './utils/getElement.js'
import getUser from './utils/getUser.js'

const image = get('.user-img')
const title = get('.user-title')
const value = get('.user-value')
const btn = get('.btn')

const btns = [...document.querySelectorAll('.icon')]

const showUser = async () => {
  // get user from api
  const person = await getUser()

  // display user
}

// load user api data on DOMContentLoaded and for the click of each Random button
window.addEventListener('DOMContentLoaded', showUser)
btn.addEventListener('click', showUser)
