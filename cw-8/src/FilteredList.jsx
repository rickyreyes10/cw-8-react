import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = { // this is the initial state of the component
      search: "",
      type: "all"
    };
  }

  // onSearch method
  onSearch = (event) => {
    this.setState({
      search: event.target.value.toLowerCase()
    });
  }
  // this method is called when the user selects a type from the dropdown menu
  onFilter = (eventKey) => {
    this.setState({
      type: eventKey
    });
  }

  // this method is called to filter the items based on the search and type
  filterItem = (item) => {
    const matchesSearch = item.name.toLowerCase().search(this.state.search) !== -1;
    const matchesType = this.state.type === "all" || item.type.toLowerCase() === this.state.type.toLowerCase();
    return matchesSearch && matchesType;
  }

  render() {
    return (
      <div className="filter-list">
        <h2 className="section-title">Produce Filter</h2>
        <div className="filter-controls">
          <Dropdown onSelect={this.onFilter}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {this.state.type === 'all' ? 'All Products' :
                this.state.type === 'fruit' ? 'Fruits' : 'Vegetables'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="all">All Products</Dropdown.Item>
              <Dropdown.Item eventKey="fruit">Fruits</Dropdown.Item>
              <Dropdown.Item eventKey="vegetable">Vegetables</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <input
            type="text"
            placeholder="Search products..."
            onChange={this.onSearch}
            className="search-input"
          />
        </div>
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;