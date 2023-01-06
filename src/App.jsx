import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PostContextProvider } from './context/PostContext'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <PostContextProvider>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/:id' element={<Home/>}/>
      </Routes>
    </PostContextProvider>

  )
}

export default App