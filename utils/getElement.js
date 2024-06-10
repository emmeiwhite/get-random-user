function getElement(selector) {
  const element = document.querySelector(selector)
  if (element) return element

  throw new Error('no element selector')
}

export default getElement
