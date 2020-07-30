import React from 'react'
import Header from './Header'
import Body from './Body'
import Sidebar from './Sidebar'
import Footer from './Footer'
import './App.css'
import './Header.css'
import './Sidebar.css'
import './Body.css'
import './Footer.css'

const App = () => {
  return (
    <div>
      <Header/>
      <div className='center'>
        <Sidebar/>
        <Body/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
