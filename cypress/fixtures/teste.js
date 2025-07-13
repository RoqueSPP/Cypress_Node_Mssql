const { faker } = require('@faker-js/faker');

function teste() {
    return {
    userId: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    number: faker.number.int({ min: 100000, max: 99999999999 })
    }
}

console.log(teste().number)