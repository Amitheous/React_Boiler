import React, { Component } from 'react';
import './items.css';

class Items extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch('/api/items')
      .then(res => res.json())
      .then(customers => this.setState({items}, () => console.log('Items fetched...', items)));
  }

  render() {
    return (
      <div>
        <h2>Items</h2>
        <ul>
        {this.state.items.map(item => 
          <li key={item.id}>{item.firstName} {item.lastName}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Items;
