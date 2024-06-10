import get from './utils/getElement.js'

const url = 'https://randomuser.me/api/'

const image = get('.user-img')
const title = get('.user-title')
const value = get('.user-value')
const btn = get('.btn')

const btns = [...document.querySelectorAll('.icon')]

const fetchPerson = async function () {
  const response = await fetch(url)
  console.log(response)
}

async function show() {
  console.log('showUser Invoked!!!')
  const person = await fetchPerson()
}

// load user api data on DOMContentLoaded and for the click of each Random button
window.addEventListener('DOMContentLoaded', showUser)
btn.addEventListener('click', showUser)
