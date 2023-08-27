function FilterCheckbox({ handleFilter, isShort }) {
  return (
    <input
      className="each-button checkbox"
      type="checkbox"
      checked={isShort}
      onChange={handleFilter}
    />
  );
}

export default FilterCheckbox;
