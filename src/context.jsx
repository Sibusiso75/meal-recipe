import React, { useState, useContext, useEffect, useCallback } from "react";

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();
function AppProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("a");
<<<<<<< HEAD
  const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loggedIn, setLoggedIn]= useState(false)
=======
>>>>>>> 4e57375 (first c)
  const [cocktails, setCocktails] = useState([]);

  const getData = useCallback(async () => {
    try {
      const res = await fetch(`${url}${searchTerm}`);
      const data = await res.json();

      const { meals } = data;
      if (meals) {
        const newCocktail = meals.map((item) => {
          const { idMeal, strMeal, strMealThumb } =
            item;
          return {
            id: idMeal,
            name: strMeal,
            image: strMealThumb,
          };
        });
         setCocktails(newCocktail);
      } else {
         setCocktails([]);
      }
    } catch (error) {
      console.log("error");
    }
  }, [searchTerm]);

  useEffect(() => {
    getData();
  }, [searchTerm, getData]);
  return (
    <AppContext.Provider
      value={{
        setSearchTerm,
<<<<<<< HEAD
        loggedIn, 
        setLoggedIn,
        cocktails,
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
      
=======
        cocktails,      
>>>>>>> 4e57375 (first c)
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };