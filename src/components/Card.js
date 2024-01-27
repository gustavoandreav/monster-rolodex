import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    
  }

  render () {
    const { image, title, text } = this.props;
    return (
      <div className={'card-container'} key={image}>
        <img alt={`monster ${title}`} className={'card-image'} src={`https://robohash.org/${image}?set=set2`} width={'300'} height={'300'}/>
        <h3 className={'card-title'}>{title}</h3>
        <p className={'card-text'}>{text}</p>
      </div>
    );
  }
}

export default Card;