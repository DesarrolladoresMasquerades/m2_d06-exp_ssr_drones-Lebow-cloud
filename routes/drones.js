const express = require('express');
const router = express.Router();

// require the Drone model here
const Drones = require("../models/Drone.model") 


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


router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
