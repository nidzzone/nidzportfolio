import React from 'react';
import nidz from '../../assets/nidz.jpg';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">NIDZHAR D. MAHAIL</h1>
      <p>Frontend Developer &#xb7; Backend Developer &#xb7; Fullstack Developer &#xb7; Junior Developer &#xb7; Video Editor &#xb7; Graphic Designer</p>

      <div className="gpt3__header-content__input">
        <div className="gpt3__header-subtitle"> Skills </div>
      
      </div>

      <div className="gpt3__header-content__people">
        <img src="https://cdn.iconscout.com/icon/free/png-512/css3-11-1175239.png?f=avif&w=256"  alt="pic" />
        <img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="pic" />
        <img src="https://cdn.cdnlogo.com/logos/j/69/javascript.svg" alt="pic"/>
         <img src="https://icons-for-free.com/iconfiles/png/512/mongodb+plain+wordmark-1324760553130770870.png" alt="pic"/>
         <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="pic"/>
         <img src="https://static.cdnlogo.com/logos/n/22/nodejs.svg" alt="pic"/>
         <img src="https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg" alt="pic"/>
         <img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Python_logo_01.svg" alt="pic"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" alt="pic"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg" alt="pic"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg" alt="pic"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" alt="pic"/>
        <img src="https://pic.onlinewebfonts.com/svg/img_424393.png" alt="pic"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="pic"/>

       
      </div>


    </div>


    <div className="gpt3__header-image">
      <img src={nidz} alt="pic"/>

    </div>
  </div>
);

export default Header;