// Iteration #1

const mongoose = require("mongoose");
const Drone = require("../models/Drone.model")

require("../db/index")


const drones = [

    {
        name: "Razor Crest",
        propellers: 3,
        maxSpeed: 14
    },

    {
        name: "Death Star",
        propellers: 20,
        maxSpeed: 18
    },


    {

        name: "Vulture Droid",
        propellers: 2,
        maxSpeed: 10
    }
    
]


Drone.create(drones)
.then(dronesFromDb => {
    console.log(`Created ${dronesFromDb.length} drones`)
})
.catch((error) => {console.log(`Error: ${error}`)})

