for (let i = 0; i < 5; i++) {
  console.log(i)
}

// console.log(i) // We can't print i due to block scoping when using let/const

const user = {
  name: 'Max',
  age: 31,
  greet() {
    console.log('Hello')
  },
}

user.__proto__.test = 5

for (const key in user) {
  if (user.hasOwnProperty(key)) {
    // only prints the properties that aren't inherited
    console.log(key)
    console.log(user[key])
  }
}

console.log('hey')

for (const val of Object.entries(user)) {
  // entries prints an array with keys and values
  console.log(val)

  console.log(val[0])
  console.log(val[1])
}

for (const val of Object.keys(user)) {
  // keys prints an array with keys
  console.log(val)
}

for (const val of Object.values(user)) {
  // values prints an array with values
  console.log(val)
}

const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
  console.log(num)
}

for (let i = 0; i < numbers.length; i++) {
  console.log(i)
  console.log(numbers[i])
}
