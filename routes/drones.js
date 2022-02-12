const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here
const Drones = require("../models/Drone.model") 


router.route("/drones/:id/edit")

// Iteration #4: Update the drone
.get((req,res) => {
    const id = req.params.id;
    Drones.findById(id)
    .then(drone=>{
      res.render("drones/update-form", drone
      )})
      
    })
    
  
    
    .post((req, res) => {
      console.log("Edit from body: ", req.body);
      
      const id = req.params.id;
      
      const name = req.body.name;
      const propellers = req.body.propellers;
    const maxSpeed = req.body.maxSpeed;
    Drone.findByIdAndUpdate( id, {name,maxSpeed,propellers}, {new: true}) 
      .then((editedDrone)=>console.log("Edited DB: ", editedDrone))
        res.redirect("/drones")
      .catch(err => {console.log("Error: ", err)})
  })
 
;

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const id = req.params.id;
  Drones.findByIdAndDelete(id)
  .then(()=>res.redirect("/drones"))
  .catch(err =>console.error(err))

});

router.route('/drones/create')
// Iteration #3: Add a new drone
.get((req, res) => {
  res.render("drones/create-form")
})
.post((req, res) => {
  console.log("Added drone: ", req.body)

    const name = req.body.name;
    const propellers = req.body.propellers;
    const maxSpeed = req.body.maxSpeed;
  
  Drones.create({name, propellers, maxSpeed})
  .then(()=> res.redirect("/drones"))
  .catch((error) => res.render("drones/create-form", error))
})
  


router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drones.find()
  .then(drones =>  {
    console.log(`Found ${drones.length} in the DB`)
    res.render("drones/list", {drones})
  })
  .catch(err => {console.log(err)});

});






module.exports = router;
