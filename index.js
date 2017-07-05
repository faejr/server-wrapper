var config = require('./config.js');

var express = require('express');
var exphbs  = require('express-handlebars');

var os = require('os'); 
var spawn = require('child_process').spawn;
var proc = spawn(config.cmd, config.args, { cwd: config.cwd });
proc.stdin.setEncoding('utf-8');
proc.stdout.setEncoding('utf-8');

// Setup express and IO
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Setup handlebars as engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Default endpoint
app.get('/', function(req, res){
	res.render('home');
});

// Setup socket.io
io.on('connection', function(socket){
	socket.on('cmd', function(msg){
		proc.stdin.write(msg + os.EOL);
	});
});

// Setup the handling of process output and errors
proc.stdout.on('data', function(data) {
	io.emit('log', data);
});
proc.stderr.on('data', function(data) {
	io.emit('error', data);
});
proc.on('close', function(code, signal) {
	console.log('Application closed');
});

// Run HTTP server
http.listen(config.port, function(){
	console.log(`listening on *:${config.port}`);
});