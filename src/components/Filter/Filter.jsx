import { selectFilter, updateFilter } from "store/phonebookSlice";
import { useDispatch, useSelector } from "react-redux";

import { Input, Label, InputGroup, Title } from "./Filter.styled";
import Container from "components/Container/Container";

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <Container>
      <Title>Contacts</Title>
      <InputGroup>
        <Label htmlFor="filter">Find contacts by name</Label>
        <Input
          type="text"
          id="filter"
          value={filter}
          onChange={e => dispatch(updateFilter(e.target.value))}
          placeholder="Filter by name"
        />
      </InputGroup>
    </Container>
  );
};
export default Filter;
