const express = require('express');
const request = require('request');


const app = express();

app.get('/api/customers', (req, res) => {
	const customer = [{
			id: 1,
			firstName: 'Artur',
			lastName: 'Oganesyan'
		},
		{
			id: 2,
			firstName: 'Alex',
			lastName: 'Okra'
		},
		{
			id: 3,
			firstName: 'John',
			lastName: 'Doe'
		},
		{
			id: 4,
			firstName: 'Vit',
			lastName: 'Remontada'
		}
	]
	res.json(customer);
})

app.get('/api/players', (req, res) => {
	request.get("http://www.easports.com/fifa/ultimate-team/api/fut/item?jsonParamObject=%7B%22name%22:%22ronaldo%22%7D", (error, response, body) => {
		if (error) {
			return console.dir(error);
		}
		let info = JSON.parse(body);
		let playerInfo = {
			"name": info.items[0].commonName,
			"imgUrl": info.items[0].headshotImgUrl
		};

		
		res.send(playerInfo);
	})

});

const port = 5000;

app.listen(port, () => console.log(`Server ${port} Started...`));