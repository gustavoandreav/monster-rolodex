import React, { Component } from 'react';

class Title extends Component {
  constructor(props) {
      super(props);
      this.state = {
          title : 'Monster Rolodex',
      }
  }

  render () {
    const { title } = this.state;
    return (
      <div className='app-title'>
        <h1>{title}</h1>
      </div>
    );
  }
}

export default Title;