var dotenv = require('dotenv').config()



var fs = require('fs');
var readline = require('readline');
var cryptojs = require('crypto-js');

var rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	})
var mkey = process.env.mkey
var data = process.env.data



function keyList(encrytedKey){

	var key = cryptojs.AES.decrypt(encrytedKey, 'fish1ing').toString(cryptojs.enc.Utf8)
	console.log("Key List:")
	var keyArray = key.split(',')
	keyArray.splice(1,1)
	keyArray.forEach(function(key, i){
		console.log(i+ " - "+ key)
	})

	return key
	
	

}

function addKey(){
	
	rl.question('Please type key:value or a number according to List to delete:', function(key){
		if (key === 'delete'){
			console.log('delete')
			fs.readFile('.env', 'utf8', function(err, encrytedKey){
		if (err) return console.log(err)

			keyList(encrytedKey.substring(5))
			addKey()
	})
			

		} else if (key.indexOf('=')!== -1){
			fs.readFile('.env', 'utf8', function(err, encrytedKey){
				if(!!encrytedKey){
					var keys =  keyList(encrytedKey.substring(5))+","+ key 

				}else{
					var keys = key
				}

				
				var encryptedKeys = 'data='+ cryptojs.AES.encrypt(keys, 'fish1ing').toString()
				// var data = encryptedKey
				fs.writeFile('.env', encryptedKeys, function(err){
					if (err) return console.log(err)
					fs.readFile('.env', 'utf8', function(err, encrytedKey){
						if (err) return console.log(err)

							keyList(encrytedKey.substring(5))
							addKey()
					})
				})
			})
		}else{
			console.log('Please enter key and value pair with a ":"')
			addKey()
		}
	})
}

keyProcess()
function keyProcess(){
	if (data === undefined){
		rl.question('No key found. Do you want to add key?(y/n)', function(ans){

			if(ans === 'y'){
				addKey()
				
				
			}else if(ans ==='n'){

			}else{

				console.log('Please enter y for Yes, n for No and Exit.')
				keyProcess()
			}

		})
	}else{
		fs.readFile('.env', 'utf8', function(err, encrytedKey){
			if (err) return console.log(err)
				keyList(encrytedKey.substring(5))
				addKey()
		})
	}
		

}
