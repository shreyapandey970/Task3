import React from 'react'

const NonExistentPage = () => {
  return (
    <div>
      <div className='bar'>
      <img src={require('../images/logo.png')} alt="LOGO" id="logoimg" />
      <div id="back2">
       {/*<h1 id="pagenotfound">404<br></br>PAGE NOT FOUND!!</h1>*/}
       <img src={require('../images/404.gif') }height={300} id="pagenotfound"/>
      </div>
      </div>
      <footer id="footer2">
        <h3 id="foot">©2023-2023<br></br>
        All Rights Reserved</h3>
          </footer>
    </div>
  )
}

export default NonExistentPage
