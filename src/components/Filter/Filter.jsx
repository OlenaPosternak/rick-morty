import { Input, FilterSection, SearchIcon } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterSection>
      <SearchIcon />
      <Input
        value={value}
        onChange={e => {
          onChange(e.target.value);
        }}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Filter by name..."
      />
    </FilterSection>
  );
};
