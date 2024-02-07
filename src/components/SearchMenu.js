const SearchMenu = (props) => {
  const { name, onNameChange } = props;
  return (
    <div>
      <input
        className={'search-box'}
        type={'search'}
        placeholder={'search monsters'}
        value={name}
        onChange={onNameChange}
      />
    </div>
  );
}

export default SearchMenu;