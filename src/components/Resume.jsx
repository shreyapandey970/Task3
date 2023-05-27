import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import { BsTelephone } from 'react-icons/bs';
import {GiAges} from 'react-icons/gi';
import {FaBirthdayCake} from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import html2pdf from 'html2pdf.js';
import '../App.css'


const Resume = ({ imageSource, userObject }) => {


  //To give an option to download the Resume - JSON FORMAT
  /*const downloadResume = () => {
    const element = document.createElement('a');
    const resumeData = JSON.stringify(userObject, null, 2);
    const file = new Blob([resumeData], { type: 'application/json' });
    element.href = URL.createObjectURL(file);
    element.download = 'resume.json';
    element.click();
  };*/


  //To download in PDF format
  const downloadResumePDF = () => {
         const resumeCard = document.getElementById('resume-card');
         const clonedResumeCard = resumeCard.cloneNode(true);
        const downloadButton = clonedResumeCard.querySelector('.download-button');
        if (downloadButton) {
          downloadButton.remove();
        }

      const element = document.createElement('div');
      element.appendChild(clonedResumeCard);

      html2pdf().from(element).save('resume.pdf');
  };

  console.log("Image Source: ",imageSource);

  return (
    <div id="resume-card" >
       <div>
          <div className='verticalbar'>
            <h3 className='fullname'>{userObject.firstName} {userObject.lastName}</h3>
      
        {imageSource && <img className='pfp' alt={`${userObject.firstName}'s profile`} src={imageSource} />}
        <p className="profile">{userObject.profile}</p>
          </div>
    <div className='contactme' >
      <h3 >CONTACT ME</h3>
      
   
    <div className="contactalign">
      <ul>
        <li>
          <BsTelephone className='icon' />
          &nbsp;{userObject.phoneNumber}
        </li>
        <li>
          <AiOutlineMail className='icon' />
          &nbsp;{userObject.email}
        </li>
        <li className='loc'>
        <HiLocationMarker className='icon' />
        &nbsp;{userObject.address} 
        </li>
        <li className='age'>
        <GiAges className='icon' />
        &nbsp;{userObject.age} 
        </li>
        <li className='dob'>
        <FaBirthdayCake className='icon' />
        &nbsp;{userObject.dob} 
        </li>
        {userObject.website && (
          <li className='website'>
            <CgWebsite className='icon' />
            {userObject.website}
          </li>
        )}
      </ul>
      </div>
      <div className="educational">
          <hr id="hr"/>
          <h4>~ EDUCATIONAL QUALIFICATIONS</h4>
            <p id="uni"><b>{userObject.university}</b></p>
            <p id="gyear">{userObject.admdcollege} - {userObject.graduationYear}</p>
            <p id="clg"><b>{userObject.college}</b></p>
            <p id="pyear">{userObject.admcollege} - {userObject.pascollege}</p>
        </div>
        <div className="courses">
          <h4>~ COURSES</h4>
            <p id="c">{userObject.course}</p>
            <p id="c">Online: {userObject.addcourse}</p>
            <p id="c">{userObject.oncourse}</p>
            
        </div>
      <div className='language'>
          <h4>~ LANGUAGE</h4>
          <p id="language">{userObject.lang}</p>
      </div>
      <div className='skills'>
          <h4>~ SKILLS</h4>
          <p id="s">{userObject.skills}</p>
      </div>
      <div className='experience'>
          <h4>~ EXPERIENCE</h4>
          <p id="exp">{userObject.exp}</p>
      </div>
     
        </div>
   
  </div>
  {/*<button className="download-button" onClick={downloadResume}>
    Download Resume
  </button>*/}
  <button className="generate-button2" onClick={downloadResumePDF}>
    Download Resume
  </button>
  
</div>

    
   
  );
};

export default Resume;
/*. */