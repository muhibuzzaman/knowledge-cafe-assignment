import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Blogs from './components/Blogs/Blogs'
import Text from './components/Text/Text'

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Blogs></Blogs>
      <Text></Text>
    </div>
  )
}

export default App
