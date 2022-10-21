// const arr = Array()
// console.log(arr)

// const eightXvalues = Array(4).fill(4)
// console.log(eightXvalues)

// concat two arrays

// const firstList = [1, 2, 3]
// const secondList = [4, 5, 6]
// const thirdList = firstList.concat(secondList)

// console.log(thirdList)

//getting array length

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.length)

//getting index of an element in an array 
//use indexOf
// const numbers =  [1, 2, 3, 4, 5]

// console.log(numbers.indexOf(5))
// console.log(numbers.indexOf(0))
// console.log(numbers.indexOf(2))

//check an element if it exists in an array

// const fruits = ['banana', 'orange', 'mango', 'lemon']
// let index = fruits.indexOf('mango')

// if (index != -1) {
//     console.log('Fruit is present')
// } else {
//     console.log("Fruit is not present")
// }

// using ternary

// index != -1
// ? console.log('FRuit is present')
// : console.log('FRuit is not present')


// const noun = Array()
// console.log (arr)

// const names = ['Fridah', 'Joy', 'Namudu', 'Aidah', 'Patience']
// console.log(names.length)
// console.log(names[0])
// console.log(names[2])

// let lastName = names.length - 1
// console.log(names[lastName])

// const mixedDataTypes = [1, 3, 10, 'Fridah', 'Joy', 'Victory']
// console.log(mixedDataTypes.length)

// const itCompanies = [ 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// console.log(itCompanies)
// console.log(itCompanies.length)

// let firstCompany = itCompanies[0]
// console.log(firstCompany)

// let middleCompany = itCompanies.length/2
// console.log(itCompanies[middleCompany])

// let lastCompany = itCompanies.length - 1
// console.log(itCompanies[lastCompany])

// console.log(itCompanies[0])
// console.log(itCompanies[1])
// console.log(itCompanies[2])
// console.log(itCompanies[3])
// console.log(itCompanies[4])
// console.log(itCompanies[5])
// console.log(itCompanies[6])

// console.log(itCompanies[0].toUpperCase())
// console.log(itCompanies[1].toUpperCase())
// console.log(itCompanies[2].toUpperCase())
// console.log(itCompanies[3].toUpperCase())
// console.log(itCompanies[4].toUpperCase())
// console.log(itCompanies[5].toUpperCase())
// console.log(itCompanies[6].toUpperCase())

// console.log(itCompanies.toUpperCase())
// console.log(itCompanies.toString())

// let index = itCompanies.indexOf('Redmi')

// if (index != -1) {
//     console.log('Redmi')
// } else{
//     console.log('Company not found')
// }

// console.log(itCompanies.sort())
// console.log(itCompanies.reverse())
// console.log(itCompanies.slice(1,4))
// console.log(itCompanies.slice(4,7))
// console.log(itCompanies.slice(3,4))
// console.log(itCompanies.shift())
// console.log(itCompanies.pop())
// console.log(itCompanies.splice())

// const person = {
//     firstName: 'Fridah',
//     lastName: 'Namudu',
//     age: 21,
//     country: 'Kenya',
//     city: 'Nairobi',
//     skills: ['HTML','CSS', 'JavaScript', 'React', 'Python'],
//     address: {
//         street: 'Heinken',
//         pobox: 2001,
//         city: 'Nairobi',
//     },
//     IsMarried: false,
//     getFullName: function (){
//         return `${this.firstName}${this.lastName}`
//     },
//     'phone number' : '+254799902819',
// }
// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.age)
// console.log(person.location)
// console.log(person.getFullName())

// const copyPerson = Object.assign({}, person)
// console.log(copyPerson)

//getting objects using keys
// const keys = Object.keys(copyPerson)
// console.log(keys)
// const skills = Object.keys(copyPerson.skills)
// console.log(skills)

// const address = Object.keys(copyPerson.address)
// console.log(address)

//getting object values using object values
//  const values = Object.values(copyPerson)
//  console.log(values)

 //getting object keys and values using object.entries()

// const entries = Object.entries(copyPerson)
// console.log(entries)

//checking property using hasOwnProperty()
// console.log(copyPerson.hasOwnProperty('firstName'))


// const dog = {
//     firstName: 'Pablo',
//     color: 'Brown',
//     age: '3years',
//     behaviour: 'bark',

//     getBehaviourInfo: function (){
//         return `${this.firstName} and I woof woof!`
//     },

// }
// dog.breed = 'German-shepherd'
// const keys = Object.keys(dog)
// console.log(keys)


//functions


// function sumTwoNumbers(numOne, numTwo) {
//     let sum = numOne + numTwo
//     console.log(sum)
// }
// sumTwoNumbers(10, 20)

// function printFullName( firstName, lastName){
//     return `${firstName} ${lastName}`
// }
// console.log(printFullName('Fridah','NAMUDU'))

//function with many parameters
// function sumArrayValues(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// const numbers = [1, 2, 3, 4, 5];
// console.log(sumArrayValues(numbers));

//unlimited number of parameters in regular function
// function sumAllNums() {
//     console.log(arguments)
// }

// sumAllNums(1, 2, 3, 4)

// function sumAllNums() {
//     let sum = 0
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i]

//     }
//     return sum
// }

// console.log(sumAllNums(1, 2, 3, 4))
// console.log(sumAllNums(30, 40, 50, 60, 70 ,80))

//unlimited number of parameters in arrow function

// const sumAllNums = (...args) => {
//     let sum = 0
//     for (const element of args) {
//         sum += element
//     }
//     return sum
// }

// console.log(sumAllNums(1, 2, 3, 4, 5,6))

//anonymous function
// Function expression
// const square = function (n) {
//     return n * n
//   }
  
//   console.log(square(2)) // -> 4

//   const personAccount = {
//     firstName : 'Fridah',
//     lastName : 'Namudu',
//     incomes : [

//     ],
//     totalIncome: function() {
//         return ``
//     },
//     totalExpense: function() {
//         return ``
//     },
//     accountInfo: function(){
//         return ``
//     },
//     addIncome: function() {
//         return ``
//     },
//     addExpense: function() {
//         return ``
//     },
//     accountBalance: function() {
//         return ``
//     }

//   }



// const users = [
//     {
//       _id: 'ab12ex',
//       username: 'Alex',
//       email: 'alex@alex.com',
//       password: '123123',
//       createdAt: '08/01/2020 9:00 AM',
//       isLoggedIn: false,
//     },
//     {
//       _id: 'fg12cy',
//       username: 'Asab',
//       email: 'asab@asab.com',
//       password: '123456',
//       createdAt: '08/01/2020 9:30 AM',
//       isLoggedIn: true,
//     },
//     {
//       _id: 'zwf8md',
//       username: 'Brook',
//       email: 'brook@brook.com',
//       password: '123111',
//       createdAt: '08/01/2020 9:45 AM',
//       isLoggedIn: true,
//     },
//     {
//       _id: 'eefamr',
//       username: 'Martha',
//       email: 'martha@martha.com',
//       password: '123222',
//       createdAt: '08/01/2020 9:50 AM',
//       isLoggedIn: false,
//     },
//     {
//       _id: 'ghderc',
//       username: 'Thomas',
//       email: 'thomas@thomas.com',
//       password: '123333',
//       createdAt: '08/01/2020 10:00 AM',
//       isLoggedIn: false,
//     },
//   ]
  
//   const products = [
//     {
//       _id: 'eedfcf',
//       name: 'mobile phone',
//       description: 'Huawei Honor',
//       price: 200,
//       ratings: [
//         { userId: 'fg12cy', rate: 5 },
//         { userId: 'zwf8md', rate: 4.5 },
//       ],
//       likes: [],
//     },
//     {
//       _id: 'aegfal',
//       name: 'Laptop',
//       description: 'MacPro: System Darwin',
//       price: 2500,
//       ratings: [],
//       likes: ['fg12cy'],
//     },
//     {
//       _id: 'hedfcg',
//       name: 'TV',
//       description: 'Smart TV:Procaster',
//       price: 400,
//       ratings: [{ userId: 'fg12cy', rate: 5 }],
//       likes: ['fg12cy'],
//     },

    
//   ]

  function signUp(){
    // let newAccount ={},
    let newUser = {}
    // let newAccount[newUser]= {}
    // let _id = prompt('enter your id ')
    // let username = prompt('enter username:')
    // let email = prompt('enter email:')
    // let password = prompt('enter your password:')
    // let createdAt = prompt('enter the date and time:')
    
    // let  = prompt('enter username:')
    // let newUser = {}
    newUser = {_id, username, email, password, createdAt}

    for (let i = 0; i < users.length -1; i++){
      if(newUser._id == users._id || newUser.username == users.username || newUser.email == users.email || newUser.password == users.password) {
        
      promt = 'user already exixts!!'

      } else {
        users.push(newUser)
        console.log(users)

      }
      return users;
    }
   
  }
  signUp()

   // newUser[newAccount]
    // console.log(newUser)
    // users.push(newUser)
    // console.log(users)


    // for( let i = 0; i < users.length -1; i++){
    //     if (newUser[newAccount] == users){
    //         console.log('account exists')
    //     }else{
    //         let newUser = users + space + newUser[newAccount]
    //         // console.log = (newUser)
  //       }
  //   }

        

  // }
