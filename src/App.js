
import './App.css';
import DarkLightToggle from './components/DarkLightToggle';
import {useSelector} from 'react-redux'

function App() {
  const isDarkMode = useSelector((state)=>state.themea.isDarkMode)
  return (
    <div className={`py-5 min-h-screen  ${isDarkMode?"bg-black":"bg-white"}`}>
      <h1 className={`text-4xl font-bold text-center font-mono ${isDarkMode? "text-white": "text-black"}` }>Light and Dark Mode Theme Toggle</h1>
      <DarkLightToggle/>
   
    </div>
  );
}

export default App;
