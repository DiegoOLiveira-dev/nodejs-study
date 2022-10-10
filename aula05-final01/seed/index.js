const {faker} = require("@faker-js/faker")
const Car = require('./../src/entities/car')
const Customer = require('./../src/entities/customer')
const CarCategory = require('./../src/entities/carCategory')

const {writeFile} = require('fs/promises')
const { join } = require('path')
const seederBaseFolder = join(__dirname, "../", "database")

const ITEMS_AMOUNTH = 2

const carCategory = new CarCategory({
    id: faker.datatype.uuid(), 
    name: faker.vehicle.type(), 
    price: faker.finance.amount(20, 100), 
    carIds: []
})

const cars = []
const customers = []

for(let i = 0; i <= ITEMS_AMOUNTH; i++){
    const car = new Car({
        id: faker.datatype.uuid(),
        name: faker.vehicle.model(),
        available: true,
        gasAvailable: true,
        releaseYer: faker.date.past().getFullYear()
    })

    carCategory.carIds.push(car.id)
    cars.push(car)

    const customer = new Customer({
        id: faker.datatype.uuid(),
        name: faker.name.fullName(),
        age: faker.random.numeric()

    })

    customers.push(customer)
}

const write = (filename, data) => writeFile(join(seederBaseFolder, filename), JSON.stringify(data))


;(async() => {
    await write('cars.json', cars)
    await write('customers.json', customers)
    await write('carsCategory.json', [carCategory])

    console.log('cars', cars)
    console.log('category', carCategory)
    console.log('customers', customers)

})()