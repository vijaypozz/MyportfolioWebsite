import React from 'react';
import { Link } from "react-scroll";


import './Navbar.css';



const Navbar = () => {

    return (

        <div className='header br3' >

            <Link
                id='lo'
                className='logoo'
                activeClass="active"
                to="main"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
            >  </Link>

            <div className='options' >
                <Link
                    className='option'
                    activeClass="active"
                    to="main"
                    spy={false}
                    smooth={true}
                    offset={-70}
                    duration={700}
                > HOME</Link>
                <Link
                    className='option'
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}
                >SKILLS</Link>

                <Link
                    className='option'
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}
                >PROJECTS</Link>

                <Link
                    className='option'
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}
                >ABOUT ME</Link>
                <Link
                    className='option'
                    activeClass="active"
                    to="footer"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={700}
                >CONTACT ME</Link>

            </div>

        </div>

    );
}
export default Navbar;