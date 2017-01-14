////DEPENDENCIES////  
var express = require('express'); 
var path = require('path'); 
var bodyParser = require('body-parser');
////SET UP EXPRESS APP//// 
var app = express();
var PORT = 3000;
//////////SET UP EXPRESS APP FOR PARSING ////////////
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
/////////CUSTOMER DATA//////////

var reservations = [];

var waitlist = [];

// JSON/API GET routes
app.get('/api/tables', function(req, res) {
    res.json(reservations);
});

app.get('/api/waitlist', function(req, res) {
    res.json(waitlist);
});

// API POST route
app.post('/api/new', function(req, res) {
    var newReservation = req.body;

    if (reservations.length < 5) {
        reservations.push(newReservation);
        res.json({type: 'reserved'});
    } else {
        waitlist.push(newReservation);
        res.json({type: 'waitlisted'});
    }

});

//ROUTING 
//===============================================//
//routing to the homepage 
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'home.html'));  
}); 
//routing to the page to make a reservation// 
app.get('/make', function(req, res){ 
	res.sendFile(path.join(__dirname, 'make.html')); 
}); 
///routing to the page to list all reservations 
app.get('/view',function(req, res){ 
	res.sendFile(path.join(__dirname, 'view.html')); 
}); 

//STARTS THE SERVER LISTENING FOR REQUESTS 
app.listen(PORT, function(){ 
	console.log('app is listening on port '+ PORT);  
}); 

 