import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './components/Header'
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import JobDetails from './pages/JobDetails'
import ApplicationForm from './components/ApplicationForm'
import ApplicationList from './pages/ApplicationList'
import ApplicationSummary from './components/ApplicationSummary'
import Profile from './pages/Profile'

function App() {
   

  return (
    <>
    
    <Header/>
     
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/job/:id" element={<JobDetails/>}/> 
      <Route path="/apply/:id" element={<ApplicationForm/>}/> 
      <Route path="/applications" element={<ApplicationList/>}/> 
      <Route path="/applications/:id" element={<ApplicationSummary/>}/> 
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
       
    </>
  )
}

export default App
