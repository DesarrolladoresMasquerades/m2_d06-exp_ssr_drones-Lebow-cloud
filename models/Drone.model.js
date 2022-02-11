// Iteration #1

const mongoose = require('mongoose');
const {Schema, model} = mongoose

const droneSchema = new Schema({

name : {type: String},
propellers : {type :Number, default: 4},
maxSpeed: {type: Number, max :18 }


})

const Drone = mongoose.model('Drone', droneSchema)

module.exports = Drone;