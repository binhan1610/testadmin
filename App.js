import React, {  useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Admin from './components/Admin'
import Header from './components/Header'
function App() {
  const [data,setData]=useState([])
const getdata=(newdata)=>{
setData(newdata)
}
console.log(data);
  return (
    <div>

      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home data={data}/>}/>
        <Route path='/Admin' element={<Admin getdata={getdata}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App