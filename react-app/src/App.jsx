import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
     alert("Hello. Button was clicked")
  }  

  return (
    <>
    <h1 className='header'>Hello World!</h1>
    <div className='container'>
      <p className='para1'>Paragaraph 1 content</p>
      <p className='para2'>Paragraph 2 content</p>
      <p className='para3'>Paragraph 3 Content</p>
    </div>
    <button className='btn' onClick={handleClick}>Click Button</button>
    </>
  )
}

export default App
