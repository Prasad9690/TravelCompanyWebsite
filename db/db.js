var hdb = require("hdb");

var client = hdb.createClient({
	host : "",
	port : "30015",
	user : "",
	password : ""
});

client.on("error",function(err){
	console.log("Error Statment::",err);
});

client.connect(function(err){
	if(err){
		return console.log("Connection error",err);
	}


});