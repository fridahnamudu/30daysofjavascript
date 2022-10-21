// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB',
//   ]
//   let index = webTechs.indexOf('Sass')
// if (index != -1){
//   console.log ('Sass is a CSS preprocess')
// }else{
//   webTechs.unshift('Sass')
//   console.log( webTechs)
// }

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']

// const fullStack = frontEnd.concat(backEnd)
// console.log(fullStack)

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] 
// let newages = ages.sort()
// console.log(newages)
// parseInt(ages)
//min age
// let meanAge = newages[0]
// console.log(meanAge)

//max age
// let maxAge = newages.length -1
// console.log(newages[maxAge])
//median item

//average age

// let score = prompt('Enter your score')
// switch(true) {
//   case score >= 0 && score < 49:
//     console.log('You have an F')
//     break
//   case score >= 50 && score < 59:
//     console.log('You have a D')
//     break
//   case score >= 60 && score < 69:
//     console.log('You have a   C')
//     break
//   case score >= 70 && score < 79:
//     console.log('You have a B')
//     break
//   case score >= 80 && score < 100:
//     console.log('You have an A')
//     break
//   default:
//     console.log('enter a number')

// }


// let month = prompt('Enter a month:')

// if (month === 'January', 'March', 'May', 'July', 'August', 'October', 'December'){
//   console.log(`${month} has 31 days`)
// } else if (month === 'February', 'April', 'June', 'September','November'){
//   console.log(`${month} has 30 days`)
// } else {
//   prompt('that is not a month')
// }
// let a = 4
// let b = 3
// if (a > b) {
//   console.log('a is greater than b')
// }else{
//   console.log('a is less than b')
// }


const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}



const user_keys = Object.keys(users)

let count_loggedIn = 0

let count_points = 0

for (let i = 0;  i < user_keys.length; i++){
  if(users[user_keys[i]]['isLoggedIn'] == true){
     
    count_loggedIn++
    console.log(count_loggedIn, user_keys[i],users[user_keys[i]]['isLoggedIn'])
  }

}

console.log(' '); console.log(' ')

// user is >= 50 points

for (let i = 0; i < user_keys.length; i++){
  let keyArr =  users[user_keys[i]]['points'] 

  if(keyArr >= 50){
    count_points++
    console.log(count_points, user_keys[i],keyArr)
  } else {
    console.log(user_keys[i],'Did not get 50 but got' , keyArr)
  }
  
}

let mernDevcount = 0
// let newArr = []

for ( let i = 0; i <user_keys.length; i++){
 let newArr = users[user_keys[i]]['skills']
//  console.log(newArr)
  if(newArr == 4)
  {
    mernDevcount++
    console.log(mernDevcount,user_keys[i])
  }

  //  for ( let x = 0; x < newArr.length; x++)
  //   if(newArr == 'MongoDB' || newArr == 'Express' || newArr == 'React' || newArr == 'Node.js'){
  //     mernDevcount++
  //     // console.log(newArr[x])
  //   }
}

const newUsers = Object.assign({}, users[user_keys]);
console.log(newUsers)
newUsers.Fridah = {};
users['Fridah'] = newUsers
// users = 
console.log(users)

const entries = Object.entries(users)
console.log(entries)



// let newUsers = users.shift()
// users = this.newUsers.shift()
// console.log(users)

// console.log(copyPerson)
//  let users.Alex == users.Fridah

// users.changeName = function(){
  // let i =0; i < users.length; i++
  // let newUsers = this.users.shift()
  // console.log(users)

//   newUsers =  this.users.unshift('Fridah') 
//   let statement = `${this.newUsers}`
//   return statement
// }

// console.log(users)
// console.log( users.changeName())