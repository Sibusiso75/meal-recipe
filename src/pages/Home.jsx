import AllCocktails from "../components/Home/AllCocktails";
import SearchForm from "../components/Home/SearchForm";
function Home() {
  return (
    <div>
      <span>          
                <main>            
                  <div>
                  <h2 style={{marginLeft:"5px"}}>Meal recipes </h2>
                  </div>                         
               </main>
             
     </span> 
           <br/>
<p style={{textAlign:"center"}}>Looking for recipe to make your own delicious meal? we got you!
</p>
<SearchForm/>
<br /><br />
<AllCocktails />
    </div>
  );
}

export default Home;