const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
	const customer = [
		{id: 1, firstName: 'Artur', lastName: 'Oganesyan'},
		{id: 2, firstName: 'Alex', lastName: 'Okra'},
		{id: 3, firstName: 'John', lastName: 'Doe'}
	]
	res.json(customer);
})

const port = 5000;

app.listen(port, () => console.log(`Server ${port} Started...`));