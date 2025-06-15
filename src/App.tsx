import AddIngredients from "./pages/AddIngredients";
import RecipeSuggestions from "./pages/RecipeSuggestions";
import AddRecipes from "./pages/AddRecipes";
import { 
    BrowserRouter as Router,  
    Route, 
    Routes,
  } from 'react-router-dom';
import './styles/global.scss';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddIngredients/>} />
        <Route path="/add-ingredients" element={<AddIngredients />} />
        <Route path="/recipe-suggestions" element={<RecipeSuggestions />} />
        <Route path="/add-recipes" element={<AddRecipes />} />
      </Routes>
    </Router>
  )

  
}
