const url = 'https://randomuser.me/api/'

const image = getElement('.user-img')

function getElement(selector) {
  const element = document.querySelector(selector)
  if (element) return element

  throw new Error('no element selector')
}
