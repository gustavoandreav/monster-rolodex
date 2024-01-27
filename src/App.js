import Rolodex from './components/Rolodex';
import Title from './components/Title';
import SearchMenu from './components/SearchMenu';
import './App.css';
import React, { Component } from 'react';

class App extends Component{
  constructor(props) {
      super(props);
      this.state = {
        nameFilter: '',
        monsters: [],
        filteredMonsters: [],
      }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({ monsters: data, filteredMonsters: data})); 
    console.log('bring data');
  }

  changeNameFilter = (e) => {
    const { monsters } = this.state;
    let newFilter = e.target.value;
    this.setState({nameFilter: newFilter});
    if(newFilter === '')
      this.setState({filteredMonsters:monsters});
    else{
      let newMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(newFilter.toLowerCase()));
      this.setState({filteredMonsters:newMonsters});
    }
  }

  render() {
    const { nameFilter, filteredMonsters } = this.state;
    return (
      <div className="App">
        <Title />
        <SearchMenu
          name={nameFilter}
          onNameChange={this.changeNameFilter}
        />
        <Rolodex
          data={filteredMonsters}
        />
      </div>
    );
  }
}

export default App;
