// Variables
var path = require('path');
var express = require('express');
var app = require('express')();
var http = require('http').Server(app);

var jwtlib = require('jsonwebtoken');

//Configure port
var port=8082;

//App directories
var PROJECT_DIR = path.normalize(__dirname);

app.use('/',express.static(path.join(PROJECT_DIR, '')));

http.listen(port, function(){
    console.log('Sample Application runnning at http://localhost:'+port+'/UI');
});




app.get('/sts', (req, res) => {
 res.set( {
  'Content-Type': 'application/json',
  "Access-Control-Allow-Origin":"*",
  "Access-Control-Allow-Headers":"*",
  "Access-Control-Allow-methods":"*"});

  const jwt = generateJWTForOTTBot();
  data = {
  	jwt:jwt
  };
  res.send(JSON.stringify(data));

})


function generateJWTForOTTBot(){
    const payload = {
    	    "iat": (new Date().getTime())/1000,
    	    "exp": (new Date().getTime())/1000+86400,
            "aud": "https://idproxy.kore.ai/authorize",
            "iss": "cs-1213db79-0286-5097-91a2-c5e70dc653cd", 
    	     "sub": "rithik.nitt@gmail.com"
    }
    const secret = "TJP+M+/kQy5xy+BuAOyhItgyVQbd7hv6ilOIDpo+3qw="; 
    var token = jwtlib.sign(payload, secret);
    return token;
	
}


