const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

if (!name || !number) {
  const final = [];
  Person.find({}).then(result => {
    result.forEach(person => {
      final.push(`${person.name}: ${person.number}`)
    })
    console.log(`${db.name}: \n${final.join('\n')}`)
    mongoose.connection.close()
  })
} else {
  const person = new Person({
    name,
    number
  })

  person.save().then(result => {
    console.log(`added ${person.name} ${person.number} to ${db.name}`)
    mongoose.connection.close()
  })
}

