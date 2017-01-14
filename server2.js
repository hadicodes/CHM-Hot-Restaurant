////DEPENDENCIES////  
var express = require('express'); 
var path = require('path'); 
var bodyParser = require('bodyParser'); 
////SET UP EXPRESS APP//// 
var app = express();
var PORT = 3000;
//////////SET UP EXPRESS APP FOR PARSING ////////////
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
/////////CUSTOMER DATA//////////
var customer = [{
	customerName:" ", 
	phoneNumber: " ", 
	customerEmail:" ", 
	customerID:" "
}]; 
//display list of all reservations 
app.get("/api/:customer?", function(res,req){ 

});
//make a reservation 
app.post(" ",function(res,req){ 


});  

//ROUTING 
//===============================================//
//routing to the homepage 
app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "home.html"));  
}); 
//routing to the page to make a reservation// 
app.get("/make", function(req, res){ 
	res.sendFile(path.join(__dirname, "make.html")); 
}); 
///routing to the page to list all reservations 
app.get("/view",function(req, res){ 
	res.sendFile(path.join(__dirname, "view.html")); 
}); 

//STARTS THE SERVER LISTENING FOR REQUESTS 
app.listen(PORT, function(){ 
	console.log("app is listening on port "+ PORT);  
}); 

 