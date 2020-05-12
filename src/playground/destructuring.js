// const person = {
  
//   age: 20,
//   location: {
//     city: 'philli',
//     temp:92
//   }
// }

// console.log(person.age)

// const { name = 'anon', age } = person 

// console.log(`${name} is ${age} and lives in ${city}`)

// const { city, temp: fuckIT } = person.location

// console.log(`fuck its hot its ${fuckIT} and were in ${city}`)


// const book = {
//   title: 'ego is the enemeny',
//   author: 'ryan holliday',
//   publisher: {
//     name: 'penguin'
//   }
// }

// const { name: publisherName = 'self-published' } = book.publisher

// console.log(publisherName)



// array destructuring 

// const adress = ['1233 s juniper', 'phili', 'penn', '034342']

// console.log(`${adress[2]}  ${adress[3]}`)

const item = ['coffee', '2', '2.5', '2.75']

const [hot, small, medium, large] = item 

console.log(`I want a ${hot} coffee that is a ${medium}`)
