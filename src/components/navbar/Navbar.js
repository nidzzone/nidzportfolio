import React from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import { useState } from 'react'



const Menu = () =>(
	<>
<p><a href="#home" > Home</a> </p>
<p><a href="#skills" > Skills</a> </p>
<p><a href="#projects" > Projects</a> </p>
<p><a href="#features" > Email</a> </p>
<p><a href="#aboutme" > About Me</a> </p>
	</>
)

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<div className="gpt3__navbar">
			<div className="gpt3__navbar-links"> 
					<div className="gpt3__navbar-links_logo">

					 <p className="LOGO">Nidzzone</p> </div>

					<div className="gpt3__navbar-links_container">
						<Menu />
					 </div>
			</div>

			<div className="gpt3__navbar-sign">
			<button type="button">Resume</button> 
			</div>

			<div className="gpt3__navbar-menu">
				{toggleMenu
				? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
					: <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
				 }
				 {toggleMenu && (
				 	<div className="gpt3__navbar-menu_container scale-up-center">
				 		<div className="gpt3__navbar-menu_container-links">
				 			<Menu />

				 			<div className="gpt3__navbar-menu_container-links-sign">
				 			<button type="button">Resume</button> 
				 			</div>

				 		 </div>
				 	 </div>
				 	)}
			 </div>		
		</div>

		)
}

export default Navbar