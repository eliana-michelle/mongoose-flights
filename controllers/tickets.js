var Ticket = require('../models/ticket');
var Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create, 
}

function newTicket(req, res){
    Flight.findById(req.params.id, function(err, flight){
        res.render('tickets/new', {flight});
    });
};

function create (req, res){
    Flight.findById(req.params.id, function(err, flight){
        console.log(flight);
        Ticket.create({flight: flight._id, seat: req.body.seat, price: req.body.price}, function(err, ticket){
            res.redirect(`/flights/${flight._id}`)
        });
    });
}
