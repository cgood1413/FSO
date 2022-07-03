const Filter = ({ onChange, searchTerm }) => {
  return (
    <label>
      Filter contacts: <input onChange={onChange} value={searchTerm} />
    </label>
  );
};

export default Filter;