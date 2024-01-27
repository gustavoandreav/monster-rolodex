import React, { Component } from 'react';
import Card from './Card';

class Rolodex extends Component {
  constructor(props) {
      super(props);
  }

  render () {
    console.log('render rolodex');
    return (
      <div className='rolodex'>
        { this.props.data.map( element => <Card image={element.id} title={element.name} text={element.email} />) }
      </div>
    );
  }
}

export default Rolodex;