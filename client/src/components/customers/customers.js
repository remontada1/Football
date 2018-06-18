import React, { Component } from 'react';

import './customers.css';

class Customers extends Component {
  constructor(){
    super();
    this.state = {
      customers: []
    }
  }

  componentDidMount() {
    fetch('/api/customers') // We don't need http... because proxy in package.json
    .then(res => res.json())
    .then(customers => this.setState({customers}, () => {
      console.log('Customer fetched..' , customers)
    })) // customers => customers: customers 
  }

  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
          {this.state.customers.map(customer => 
            <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Customers;
