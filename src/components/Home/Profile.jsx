/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./Profile.css"
import { FaInstagram, FaTwitter, FaFileDownload, FaGithub, FaLinkedin } from "../../../node_modules/react-icons/fa/"
import Typical from 'react-typical'


const Profile = () => {

    const handlehire = (e) => {
        e.preventDefault();
        const contact = document.getElementById("contactID");
        contact.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className='profile-container text-center'>
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
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

                    <div className="profile-details-name">
                        <span className='primary-text'>
                            Hello I'm <span className='adim'>Omer</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className='primary-text'>
                            <h1>
                                <Typical
                                className='sil'
                                    loop={Infinity}
                                    steps={[
                                        "OMER ULUSAL",
                                        1000,
                                        "C#",
                                        1000,
                                        "Javascript",
                                        1000,
                                        "React-NextJS",
                                        1000,
                                        "R3F-ThreeJS",
                                        1000,
                                        "HTML-CSS",
                                        1000,
                                        "SASS-SCSS",
                                        1000,
                                        "Tailwind",
                                        1000,
                                        "Bootstrap",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline py-md-2'>
                                FullStack Developer
                            </span>
                        </span>
                        <div className="profile-options mt-md-3">
                            <button className='btn btn-primary fs-6 btn-sm  '>
                                <a onClick={handlehire}>Hire Me</a>
                            </button>
                            <a href="OmerUlusal CV.pdf" download >
                                <button className='btn highlighted-btn'>
                                    Get Resume(Lang:TR)
                                    <FaFileDownload className='mx-1' />
                                </button>
                            </a>

                        </div>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
            <span className="spinner">
            </span>
        </div>
    )
}

export default Profile