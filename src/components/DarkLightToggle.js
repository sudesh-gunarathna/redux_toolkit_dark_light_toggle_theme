import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../redux/theme/themeSlice';


function DarkLightToggle() {
const isDarkMode = useSelector((state)=>state.themea.isDarkMode)
console.log(isDarkMode)

const dispatch = useDispatch();

const handleToggleClick =()=>{
    dispatch(toggleTheme())
}

  return (
    <div className={`flex gap-3 cursor-pointer  font-mono justify-center border rounded-md px-2 py-2 mx-2 my-2 ${
        isDarkMode ? "border-white text-white" : "border-black text-black" 
      }`}
     onClick={handleToggleClick} >
      <div>{isDarkMode? "Light": "Dark"}</div>
      <div>{isDarkMode? "🌞" : "🌜"}</div>
    </div>
  )
}

export default DarkLightToggle
