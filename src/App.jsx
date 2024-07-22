import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navnav from '../public/Navnav'
import Capricho from '../public/Capricho'
import CaprichoSp from '../public/CaprichoSp'
import Cafe from '../public/Cafe'
import Lib from '../public/Lib'

function App() {

  return (
    <>
      <Navnav />
      <Routes>
          <Route path="/" element={<Capricho/>}/>
          <Route path="/Sp" element={<CaprichoSp/>}/>
          <Route path="/Cafe" element={<Cafe/>}/>
          <Route path="/Lib" element={<Lib/>}/>          
      </Routes>
    </>
  )
}

export default App

//~Home~+~AbtUs~+Calender
//~Events~+~Menu~+Pay
//Figure how to wrap tab-cntnt + add borders on menu
//Lib
//~Nav~ / ~Footer~ 