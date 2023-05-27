import './App.css';
import React, {useState, useEffect} from 'react';
import Resume from './components/Resume';
import NonExistentPage from './components/NonExistentPage';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PromptUser from './components/PromptUser'



function App() {

  const [userInfo, setUserInfo] = useState({})
  const [source,setSource] = useState('')
  
  const generateImage = () => {
    setSource('')
    console.log(source)
  }

  useEffect(()=>{
    generateImage()
  },[])

  function handleChange(e) {
    setUserInfo(prevInfo => {
      return{
        ...prevInfo,
        [e.target.name] : e.target.value
      }
    })
  }

  return(
    <Router>
      <Routes>
        <Route path = '/' element={<PromptUser userObject = {userInfo} imageSource={source} handleChange={handleChange} setSource={setSource}/>}></Route>
        <Route path = '/resume' element={<Resume userObject = {userInfo} imageSource={source} />}/>
        <Route path ='*' element={<NonExistentPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
