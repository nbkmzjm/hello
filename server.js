var PORT = process.env.PORT || 3000;
const express = require('express')
const app = express()
var http = require('http').Server(app);
var path = require('path');

app.use(express.static(__dirname + '/public'))
// app.listen(3000, () => console.log('server running on post 3000'))


// app.set('view engine', 'html');
// app.engine('html', require('ejs').renderFile);
// app.set('views', path.join(__dirname + '/public', 'views'));
// app.set("view options", {
// 	layout: true
// });

// var db = require('./db.js');

http.listen(PORT, function() {
	console.log('Helllo Express server started on PORT ' + PORT);
	
});


app.get('/', function(req, res, next) {

	res.render('index')
	
	// db.assign.findAll({
	// 	include: [db.user]
	// }).then(function(assigns) {
	// 	// next();
	// 	return [assigns, db.user.findAll()];
	// }).spread(function(assigns, users) {
	// 	// console.log('suerssssssssss' + JSON.stringify(users));
	// 	// console.log('ggggggggggggg' + JSON.stringify(assigns));
	// 	// console.log('yyyyyyyyyy' + JSON.stringify(dateHeader));
	// 	res.render('index', {
	// 		JSONdata: JSON.stringify({
	// 			vapidPub:vapidKeys.publicKey
	// 		// users: users,
	// 		// assigns: assigns,
	// 		// dateHeader: dateHeader
	// 		})
			
	// 	});
	// }).catch(function(e) {
	// 	res.render('error', {
	// 		error: "eeeeee" + e.toString()
	// 	});
	// });
});
