var PORT = process.env.PORT || 3000;
const express = require('express')
const app = express()
var http = require('http').Server(app);
var path = require('path');
var expValidator = require('express-validator');
var cookieParser = require('cookie-parser');
var debug = require('debug')('http')
const webpush = require('web-push')
const xoauth2 = require('xoauth2')
var moment = require('moment');
var now = moment();
var bodyParser = require('body-parser');
var fs = require('fs')

var bcrypt = require('bcryptjs');
var _ = require('underscore');

app.use(express.static(__dirname + '/public'))
// app.listen(3000, () => console.log('server running on post 3000'))


app.set('view engine', 'pug');
// app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname + '/public', 'views'));
app.set("view options", {
	layout: true
});

var db = require('./db.js');



app.get('/', function(req, res, next) {
	console.log('helosg from hoem ')
	// db.employee.findAll().then(function(employee){
	// 	console.log(employee)
		res.render('index',{
			// JSONdata: JSON.stringify({
			// 	employee:employee
			// })
		})
	// })
	
	
	// db.assign.findAll({
	// 	include: [db.user]
	// }).then(function(assigns) {
	// 	// next();
	// 	return [assigns, db.user.findAll()];
	// }).spread(function(assigns, users) {
	// 	// console.log('suerssssssssss' + JSON.stlringify(users));
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

http.listen(PORT, function() {
	console.log('Helllo Express server started on PORT ' + PORT);
	// db.employee.create({
	// 	name: 'thien',
	// 	email: 'tk@yahoo.com',
	// 	username:'nbkmzjm',
	// 	title: 'rph'
	// }).then(function(employee){
	// 	// console.log(employee)


	// })
	
});

// db.sequelize.sync(
// 	{force: true}
// 	).then(function() {
		
// 		http.listen(PORT, function() {
// 			console.log('Helllo Express server started on PORT ' + PORT);
// 			db.employee.create({
// 				name: 'thien',
// 				email: 'tk@yahoo.com',
// 				username:'nbkmzjm',
// 				title: 'rph'
// 			}).then(function(employee){
// 				// console.log(employee)


// 			})
			
// 		});

// 	});