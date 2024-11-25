import React, { Component } from 'react';

class List extends Component {
  renderList() {
    const items = this.props.items.map(item => {
      return (
        <li key={item.name} className="produce-item">
          {item.name} <span className="text-muted">({item.type})</span>
        </li>
      );
    });

    return items;
  }

  render() {
    return (
      <ul className="produce-list">
        {this.renderList()}
      </ul>
    );
  }
}

export default List; 
