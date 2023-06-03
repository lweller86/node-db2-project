// STRETCH
const cars = [
    {vin: '2CNDL23F856093901', 
    make: 'toyota',
    model: 'tundra',
    mileage: 2500,
    title: 'Clean',
    transmission: 'Manual' 
    },
    {vin: '1G4HP54KX24151104', 
    make: 'toyota',
    model: 'prius',
    mileage: 25000,
    title: 'Salvage',
    transmission: 'automatic' 
    },
    {vin: 'JH4DA3340HS032394', 
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