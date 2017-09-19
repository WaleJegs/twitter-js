//const http = require('http');
//const server = http.createServer();


//perform some action on every request no matter what
/*
app.use(function(req, res, next){
	req.attachment = 'cookies';
	console.log(req.url);
	next();
})
*/


const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const PORT = 3000;
const counter = 0

//et pokemon = ['pikachu', 'raichu', 'bulbasaur', 'charmander']
//server.on('request', app)



var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
nunjucks.configure('views', {
	noCache: true,
	express: app
});
// nunjucks.render('index.html', locals, function (err, output) {
// 		console.log(err);
//     console.log(output);
// });

app.listen(PORT, function(){
	console.log('Example app listening on port 3000!')
})

app.use(function(req, res, next){
	console.log(req.method + " " + req.url + " " + res.statusCode);
	next();
})

app.use("/special/", function(req, res, next){
	console.log("this is the special place")
	next();
})

app.get('/', function(req, res){
	res.send("Hello World!");
})

app.get("/news", function(req, res){
	res.send("This is the news");
})

app.get("/views", function(req, res){
	res.render('index.html', {title: locals.title, people: locals.people});
})

app.get("/special", function(req, res){
	res.send("are you allowed to be here?");
})


/*
app.get('/pokemon/:id', function(req, res){
	res.send(pokemon[req.params.id]);
})
*/


/*
// wont happen until a request comes in (event listener for a request)
server.on('request', function(request, response){
	// you gave me a request
	//console.log(request)
	if (request.url === '/pokemon'){
		response.writeHead(200, {'Content-Type': 'text/plain'})
		response.end('Welcome to my server ' + pokemon);
		// my job is to send a response
		console.log('current count:' + counter)
		counter ++;
	} else if (request.url === '/ilikecookies'){
		response.writeHead(200, {'Content-Type': 'text/plain'})
		response.end('cookies are great')
	}
})



server.listen(PORT, function(){
	console.log('hey dawg, server runnin on port ' + PORT);pokemon
})
*/
