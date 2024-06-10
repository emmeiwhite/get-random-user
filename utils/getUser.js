const url = 'https://randomuser.me/api/'

/** --- Responsible for data fetch and returning an object | Since getUser is an async function, it returns a promise  --- */

const getUser = async function () {
  try {
    const response = await fetch(url)

    const data = await response.json()
    // let's de-structure the data related to the person
    const person = data.results[0]

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

export default getUser
