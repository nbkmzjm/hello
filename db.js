var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
console.log(env)
var sequelize;


if (env === 'production'){
	
	sequelize = new Sequelize(process.env.DATABASE_URL, {
		dialect: 'postgres'
	});
} else {
	sequelize = new Sequelize(undefined, undefined, undefined, {
	// host:"localhost",
	dialect:'sqlite',
	storage: __dirname+'/data/dev-todo-api.sqlite'
	// logging:false
	});
}


var db = {};	
db.employee = sequelize.import(__dirname + '/models/employee.js')
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;