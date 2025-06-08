import InputScreen from "./pages/InputForm";
import RecipeSuggestions from "./pages/RecipeSuggestions";
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
        <Route path="/" element={<InputScreen />} />
        <Route path="/recipe-suggestions" element={<RecipeSuggestions />} />
      </Routes>
    </Router>
  )

  
}
