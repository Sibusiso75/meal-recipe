import React from "react";
import { useGlobalContext } from "../context";

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef();

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);
  function searchCocktail() {
    setSearchTerm(searchValue.current.value);
  }
  return (
    <div className="searchForm">
      <form onSubmit={(e) => e.preventDefault()}  >
        <input
          type="text"

          ref={searchValue}
          placeholder="search your favourite meal..."
          onChange={searchCocktail}
          className="searchForm"
        />
      </form>
    </div>
  );
}

export default SearchForm;