import Rolodex from './components/Rolodex';
import Title from './components/Title';
import SearchMenu from './components/SearchMenu';
import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [nameFilter, setNameFilter] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setMonsters(data));
  }, []);

  useEffect(() => {
    if(nameFilter === '')
      setFilteredMonsters(monsters);
    else{
      let newMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(nameFilter.toLowerCase()));
      setFilteredMonsters(newMonsters);
    }
  }, [monsters, nameFilter]);

  const changeNameFilter = (e) => {
    const newFilter = e.target.value;
    setNameFilter(newFilter);
  }

  return (
    <div className="App">
      <Title
        title={'Monster Rolodex'}
      />
      <SearchMenu
        name={nameFilter}
        onNameChange={changeNameFilter}
      />
      <Rolodex
        data={filteredMonsters}
      />
    </div>
  );
}

export default App;
