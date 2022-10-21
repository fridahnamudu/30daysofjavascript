const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]

let index = countries.indexOf('Ethiopia')
if (index != -1){
  console.log ('Ethiopia exists')
}else{
  console.log('Ethiopia does not exist')
}

// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// const words = text.split(' ')

// console.log(words)
// console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
console.log(shoppingCart)

shoppingCart[3] = 'Green Tea'
console.log(shoppingCart)
console.log(shoppingCart.splice(4,5))