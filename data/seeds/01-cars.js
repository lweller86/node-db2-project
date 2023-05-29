// STRETCH
const cars = [
    {vin: '1111111111111', 
    make: 'toyota',
    model: 'tundra',
    mileage: 2500,
    title: 'Clean',
    transmission: 'Manual' 
    },
    {vin: '11111111111111111', 
    make: 'toyota',
    model: 'prius',
    mileage: 25000,
    title: 'Salvage',
    transmission: 'automatic' 
    },
    {vin: '222222222222222222', 
    make: 'chevy',
    model: 'silverado',
    mileage: 250,
    title: 'Clean',
    },
]

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}