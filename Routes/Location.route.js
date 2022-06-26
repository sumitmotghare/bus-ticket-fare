const express = require('express');
const router = express.Router();

const LocationController = require('../Controllers/Location.Controller');

//Get a list of all locations
router.get('/', LocationController.getAllLocations);

//Create a new location
router.post('/', LocationController.createNewLocation);

//Get a location by id
router.get('/:id', LocationController.findLocationById);

//Get a location fare
router.get('/:source/:destination', LocationController.getLocationFare);

//Update a location by id
router.patch('/:id', LocationController.updateALocation);

//Delete a location by id
router.delete('/:id', LocationController.deleteALocation);

module.exports = router;
