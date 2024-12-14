import { useGlobalContext } from "../../context";
import CocktailList from "./CocktailList";

function AllCocktails({}) {
  const { cocktails } = useGlobalContext();

  
  if (cocktails.length < 1) {
    return <p>No results found</p>;
  }

  return (
    <div className="cont">
      {cocktails.map((cocktail) => {     
        return <CocktailList key={cocktail.id} {...cocktail} />;
        
      })}
    </div>
  );
}

export default AllCocktails;