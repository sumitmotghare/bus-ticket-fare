const createError = require('http-errors');
const mongoose = require('mongoose');

const Location = require('../Models/Location.model');

const calculateFare = (source_km, destination_km) =>
{
 return new Promise((resolve, reject) =>
 {
  const difference = destination_km - source_km;
  let fare = 0;
  if ( difference > 0 && difference <= process.env.MINIMUM_BUS_FARE_DISTANCE )
  {
    fare = process.env.MINIMUM_BUS_FARE;
  } else if (difference > process.env.MINIMUM_BUS_FARE_DISTANCE && difference <= 19) {
    fare = process.env.MINIMUM_BUS_FARE + ((difference - 3) * 2);
  } else if (difference > 19) {
    fare = process.env.MINIMUM_BUS_FARE + (17 * 2) + (difference - 20);
  }
  else
  {
   reject(Error("Invlalid Journey"));
  }
  resolve(fare);
 });
};

module.exports = {
  getAllLocations: async (req, res, next) => {
    try {
      const results = await Location.find({}, { __v: 0 });
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewLocation: async (req, res, next) => {
    try {
      const location = new Location(req.body);
      const result = await location.save();
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error.name === 'ValidationError') {
        next(createError(422, error.message));
        return;
      }
      next(error);
    }
  },

  findLocationById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const location = await Location.findById(id);
      if (!location) {
        throw createError(404, 'Location does not exist.');
      }
      res.send(location);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Location id'));
        return;
      }
      next(error);
    }
  },

  updateALocation: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Location.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Location does not exist');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Location Id'));
      }

      next(error);
    }
  },

  deleteALocation: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Location.findByIdAndDelete(id);
      // console.log(result);
      if (!result) {
        throw createError(404, 'Location does not exist.');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Location id'));
        return;
      }
      next(error);
    }
  },

  getLocationFare: async (req, res, next) => {
    const source = req.params.source;
    const destination = req.params.destination;
    try {
      const sourceLocation = await Location.findById(source);
      if (!sourceLocation) {
        throw createError(404, 'Source Location does not exist.');
      }
      const destinationLocation = await Location.findById(destination);
      if (!destinationLocation) {
        throw createError(404, 'Destination Location does not exist.');
      }
      calculateFare(sourceLocation.distance, destinationLocation.distance).then(difference =>
      {
        res.status(200).send({message: `The total fare between ${sourceLocation.name} and ${destinationLocation.name} is Rs. ${difference}`});
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Location details'));
        return;
      }
      next(error);
    }
  }
  
};
