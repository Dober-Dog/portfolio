import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import SiteList from './components/SiteList'
import Footer from './components/Footer'

function App() {

  return (
    <Router>
      <Header />
      <Routes className='main'>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Projects' element={<SiteList />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
