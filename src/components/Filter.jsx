export const Filter = ({ value, onChange }) => {
  return (
    <input
      value={value}
      onChange={e => {
        onChange(e.target.value);
      }}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Filter by name..."
    />
  );
};
