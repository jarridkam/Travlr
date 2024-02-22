const mongoose = require('mongoose');
const Trip = mongoose.model('trips');


//GET: /trips - list all the trips
const tripsList = async (req, res) => {
    Trip
       .find({}) //empty filter for all  
       .exec((err, trips) => {
           if(!trips) {
               return res
                   .status(404)
                   .json({"message": "trip not found"});
           } else if (err) {
               return res
                   .status(404)
                   .json(err);
           } else {
               return res
                   .status(200)
                   .json(trips);
           }
       });  
};

const tripsFindCode = async (req, res) => {
    Trip
   .find({ 'code': req.params.tripCode }) //empty filter for all  
   .exec((err, trip) => {
       if(!trip) {
           return res
               .status(404)
               .json({"message": "trip not found"});
       } else if (err) {
           return res
               .status(404)
               .json(err);
       } else {
           return res
               .status(200)
               .json(trip);
       }
   });  

};

const tripsAddTrip = async (req, res) => {
    Trip
        .create({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        },
        (err, trip) =>{
        if (err) {
            return res
                .status(404)
                .json(err);
        } else {
            return res
                .status(201)
                .json(trip);
        }
    });
}

const tripsUpdateTrip = async (req, res) => {
    console.log(req.body);
    Trip
        .findOneAndUpdate({ 'code': req.params.tripCode}, {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        }, {new: true})
        .then(trip => {
            if(!trip) {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode
                    });
            }
            res.send(trip);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res
                    .status(404)
                    .send({
                        message: "Trips not found with code " + req.params.tripCode
                    });
            }
            return res
                .status(500)
                .json(err);
        });
}

module.exports = {
   tripsList,
   tripsFindCode,
   tripsAddTrip,
   tripsUpdateTrip
};