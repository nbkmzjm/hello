var dotenv = require('dotenv').config()



var fs = require('fs');
var readline = require('readline');
var cryptojs = require('crypto-js');

var rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	})
var mkey = 'fish1ing'
var data = process.env.data



function keyList(encrytedKey){


	var key = cryptojs.AES.decrypt(encrytedKey, mkey).toString(cryptojs.enc.Utf8)
		console.log("Key List:")
		var keyArray = key.split(',')

		keyArray.forEach(function(key, i) {
			console.log(i + " - " + key)
		})

		return key
	

}

function addKey(){
	
	rl.question('Please type key:value entry or DEL for delete:', function(key){
		if (key === 'del' || key === 'DEL'){

			
			fs.readFile('.env', 'utf8', function(err, encrytedKey){
				if (err) return console.log(err)
				rl.question('Please select item to delete:', function(item){
					if (isNaN(item) === false && item != 0){

						
						var key = cryptojs.AES.decrypt(encrytedKey.substring(5), mkey).toString(cryptojs.enc.Utf8)
						var keyArray = key.split(',')
						keyArray.splice(item,1)
						
						var updatedKey = keyArray.join(',')
						var encryptedKeys = 'data='+ cryptojs.AES.encrypt(updatedKey, mkey).toString()
						fs.writeFile('.env', encryptedKeys, function(err){
							if (err) return console.log(err)
							fs.readFile('.env', 'utf8', function(err, encrytedKey){
								if (err) return console.log(err)

									keyList(encrytedKey.substring(5))
									addKey()
							})
						})
					}else{
						console.log('Please select numberic value more than 0 to delete a key')
						fs.readFile('.env', 'utf8', function(err, encrytedKey){
							if (err) return console.log(err)
								keyList(encrytedKey.substring(5))
								addKey()
						})

					}

					
				})
				

			})
			

		} else if (key.indexOf('=')!== -1){
			fs.readFile('.env', 'utf8', function(err, encrytedKey){
				if(!!encrytedKey){
					var keys =  keyList(encrytedKey.substring(5))+","+ key 

				}else{
					var keys = 'key=value'
				}

				
				var encryptedKeys = 'data='+ cryptojs.AES.encrypt(keys, mkey).toString()
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


if (mkey !== undefined) {
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
		
  	}else{
  		console.log('Please provide password for editing env or Delete content of .env for to reset all keys')
  	}


