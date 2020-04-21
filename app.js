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

// for (const val of Object.values(user)) {
//   console.log(val);
// }
