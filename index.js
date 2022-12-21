"use strict";

// Dependencies
const faker = require("faker")

// Main
function generate(){
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const creditCardType = faker.helpers.randomize([ "Visa", "Mastercard", "American Express", "Discover" ])

    return {
        fullName: `${firstName} ${lastName}`,
        firstName: firstName,
        lastName: lastName,
        gender: faker.helpers.randomize([ "male", "female" ]),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        streetAddress: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
        creditCardType: creditCardType,
        creditCardNumber: faker.finance.creditCardNumber(creditCardType),
        company: faker.company.companyName(),
        jobTitle: faker.name.jobTitle()
    }
}

module.exports = generate