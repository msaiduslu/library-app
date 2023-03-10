import React from "react";
import {
  HeaderButton,
  HeaderContainer,
  HeaderForm,
  HeaderTitle,
  SearchInput,
  SelectBox,
} from "./Header.style";

const Header = ({ setSelectType, setQuery, getData }) => {
  const printType = ["all", "books", "magazines"];

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <HeaderContainer>
      <HeaderTitle>Books Or Magazines</HeaderTitle>
      <HeaderForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="name"
          required
          onChange={(e) => setQuery(e.target.value)}
        />
        <SelectBox onChange={(e) => setSelectType(e.target.value)}>
          {printType.map((type) => {
            return (
              <option key={type} value={type}>
                {type}
              </option>
            );
          })}
        </SelectBox>
        <HeaderButton type="submit">Search</HeaderButton>
      </HeaderForm>
    </HeaderContainer>
  );
};

export default Header;
