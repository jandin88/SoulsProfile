import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Home'
import Pro from './pages/Professional'
import Personal from './pages/Personal'
function App() {

  return (
    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/work' element={<Pro/>}/>
        <Route path='/personal' element={<Personal/>}/>
    </Routes>
  )
}

export default App
