import get from './utils/getElement.js'

const url = 'https://randomuser.me/api/'

const image = get('.user-img')
const title = get('.user-title')
const value = get('.user-value')
const btn = get('.btn')

const btns = [...document.querySelectorAll('.icon')]

/** --- Responsible for data fetch and returning an object | Since getUser is an async function, it returns a promise  --- */
const getUser = async function () {
  try {
    const response = await fetch(url)

    const data = await response.json()
    // let's de-structure the data related to the person
    const person = data.results[0]

    console.log(person)
    const { email, phone } = person
    const { large: image } = person.picture
    const { password } = person.login
    const { first, last } = person.name
    const {
      dob: { age }
    } = person
    const {
      street: { number, name }
    } = person.location

    /** --- We return our Object --- */
    return {
      email,
      phone,
      image,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`
    }
  } catch (error) {
    console.log(error)
  }
}

const showUser = async () => {
  // get user from api
  const person = await getUser()

  // display user
}

// load user api data on DOMContentLoaded and for the click of each Random button
window.addEventListener('DOMContentLoaded', showUser)
btn.addEventListener('click', showUser)
