import React, { Component } from 'react';

const Title = (props) => {
  const { title } = props;
  return (
    <div className='app-title'>
      <h1>{title}</h1>
    </div>
  );
}

export default Title;