import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Blogs from './components/Blogs/Blogs'

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Blogs></Blogs>
    </div>
  )
}

export default App