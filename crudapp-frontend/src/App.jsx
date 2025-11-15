import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Tablelist from './components/Tablelist'
import Modalform from './components/Modalform'

function App() {
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setmodalMode] = useState('add');

  //handleer to open modal
  const handleOpen = (mode) => {
    setIsOpen(true);
    setmodalMode(mode);
  }

  const handleSubmit = () => {
    if(modalMode === 'add') {
    console.log("modal mode Add");
    } else {
      console.log("modal mode Edit");
    }
  }

  return (
      <>
      
      <Navbar onOpen={() => handleOpen('add')}/>
      <h1 class="text-3xl font-bold underline">
     Hello world!
     </h1>
     <Tablelist handleOpen={handleOpen}/>
     <Modalform isOpen = {isOpen} onClose = {() => setIsOpen(false)} mode={modalMode} onSubmit = {handleSubmit}/>
 
      </>
  )
}

export default App
