/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "../../../node_modules/react-icons/fa/";
import "./Footer.css";

const Footer = () => {
    const contactClick = (event) => {
        event.preventDefault();
        const contactSection = document.getElementById('contactID');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    const aboutclick = (event) => {
        event.preventDefault();
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
    const skillsClick = (event) => {
        event.preventDefault();
        const skillsSection = document.getElementById('skills');
        skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
    const projectClick = (event) => {
        event.preventDefault();
        const projectsSection = document.getElementById('projects');
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <footer>
            <div className="my-icon">
                <img src="" alt="" />
                <div className="my-text">
                    <p>My social media connections</p>
                </div>
            </div>
            <div className="footerTop">
                <div className="colz-icon">
                    <a href="https://www.instagram.com/om3r_ulsl/">
                        <FaInstagram className='ic' fontSize={32} color='white' />
                    </a>
                    <a href="https://twitter.com/scalperOmer">
                        <FaTwitter className='ic' fontSize={32} color='white' />
                    </a>
                    <a href="https://github.com/omerulusal">
                        <FaGithub className='ic' fontSize={32} color='white' />
                    </a>
                    <a href="https://www.linkedin.com/in/%C3%B6mer-ulusal-83988b214/">
                        <FaLinkedin className='ic' fontSize={32} color='white' />
                    </a>
                </div>
            </div>
            <div className="footerBody">
                <a onClick={contactClick}>Contact</a>
                <a onClick={aboutclick}>About</a>
                <a onClick={skillsClick}>Skills</a>
                <a onClick={projectClick}>Projects</a>
            </div>

            <div className="telif">
                OMER ULUSAL 2024&copy;
            </div>
        </footer>
    )
}

export default Footer
