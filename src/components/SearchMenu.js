import React, { Component } from 'react';

class SearchMenu extends Component {
  render () {
    return (
      <div>
        <input
          className={'search-box'}
          type={'search'}
          placeholder={'search monsters'}
          value={this.props.name}
          onChange={this.props.onNameChange}
        />
      </div>
    );
  }
}

export default SearchMenu;