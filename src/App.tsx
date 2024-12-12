import './App.css'
import { BrowserRouter } from 'react-router-dom'
import MyNavbar from './components/MyNavbar'
import Homepage from './components/Homepage'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Homepage />
      </BrowserRouter>
    </>
  )
}

export default App
