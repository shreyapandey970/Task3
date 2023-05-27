import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import 'animate.css'
import Resume from './Resume'

const PromptUser = ({handleChange, OnButtonClick, imageSource, userObject, setSource}) => {

    const navigate = useNavigate()
    const [image, setImage] = useState(null);
    console.log("Image URL: ",image);


    const onButtonClick = () => {
        alert("RESUME GENERATED")
        setSource(image);
        navigate('/resume')
    }

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result);
          //console.log(image);
        };
        reader.readAsDataURL(file);
      };
      

  return (
    <>
    {OnButtonClick ? <Resume userObject = {userObject} imageSource={imageSource}/> : 
    <div className='bar'>
      <img src={require('../images/logo.png')} alt="LOGO" id="logoimg" />
      <div id="back">
        <div className='inputs'>
          <h2 id="title">DETAILS</h2>
            <input  onChange={handleChange} placeholder="Enter your First Name" name="firstName" className="fields"/>
            <input  onChange={handleChange}  placeholder="Enter your Last Name" name="lastName" className="fields" />
            <input  onChange={handleChange} placeholder="Profile Details" name="profile" isTextArea={true} className="fields" />
           <br></br><br></br><br></br>
            <input  onChange={handleChange}  placeholder="Enter your phone number" name="phoneNumber" className="fields" />
            <input  onChange={handleChange}  type='date'  name="dob" className="fields"  />
            <input  onChange={handleChange}  type='number' placeholder="Enter your age" name="age"  className="fields" />
            <br></br><br></br><br></br>

            <input  onChange={handleChange} placeholder="Enter your email ID" name="email" className="fields" />
            <input  onChange={handleChange}  placeholder="Enter Address" name="address" isTextArea={true} className="fields" />
            <input  onChange={handleImageUpload} name='photo' type='file' id='filefield' />
           <br /><br /><hr /><br />


            <h2 id="title2">EDUCATIONAL QUALIFICATIONS</h2>
            <input  onChange={handleChange} placeholder="Enter your College Name" name="college" className="fields" />
            <input  onChange={handleChange} placeholder="Enter your Admission Year" name="admcollege" className="fields" />
            <input  onChange={handleChange} placeholder="Enter your Passing Year" name="pascollege" className="fields" />
            <br></br><br></br><br></br>

            <input  onChange={handleChange} placeholder="Enter your University Name" name="university" className="fields" />
            <input  onChange={handleChange} placeholder="Enter your Admission Year" name="admdcollege" className="fields" />
            <input  onChange={handleChange} placeholder="Enter your Graduation Year" name="graduationYear" className="fields" />
            <br></br><br></br><br></br>

            <input  onChange={handleChange} placeholder="Enter your Course" name="course" className="fields" />
            <input  onChange={handleChange} placeholder="Enter Additional Courses (if opted)" name="addcourse" className="fields" />
            <input  onChange={handleChange} placeholder="Enter Online Courses (if any)" name="oncourse" className="fields" />
           
            <br /><br /><hr /><br />
           
            <h2 id="title3">LANGUAGES & SKILLS</h2>
            <input  onChange={handleChange} placeholder="Enter Languages Known" name="lang" id="fieldslang" />
            <input  onChange={handleChange} placeholder="Enter Your Professional Skills" name="skills" id="fieldslang" />
            <br /><br /><hr /><br />
           
           
           

           
            <h2 id="title4">EXPERIENCE</h2>
            <textarea  onChange={handleChange} placeholder="Enter Experience" name="exp" isTextArea={true}  id="fieldsexp"  />
            <br /><br /><hr /><br />
          

            <br></br>
            <button className='generate-button' onClick={()=>{
                onButtonClick()
            }}>Generate Resume <HiArrowRight /></button>
            </div>
        </div>
        <footer id="footer">
        <h3 id="foot">©2023-2023<br></br>
        All Rights Reserved</h3>
          </footer>
        </div>
        }
    </>
  )
}

export default PromptUser

