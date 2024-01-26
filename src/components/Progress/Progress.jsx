import React from 'react';
import "./Progress.css";

const Progress = () => {
    return (

        <>
            <div className="container-fluid" id='skills'>
                <h2>Skills & Tools</h2>
                <div className="container__progressbars">

                    <div className="progressbar">
                        <svg className="progressbar__svg">
                            <circle cx="80" cy="80" r="65" className="progressbar__svg-circle circle-html shadow-html"> </circle>
                        </svg>
                        <span className="progressbar__text shadow-html">HTML</span>
                    </div>

                    <div className="progressbar">
                        <svg className="progressbar__svg">
                            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-css shadow-css"> </circle>
                        </svg>
                        <span className="progressbar__text shadow-css">CSS</span>
                    </div>

                    <div className="progressbar">
                        <svg className="progressbar__svg">
                            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-js shadow-js"> </circle>
                        </svg>
                        <span className="progressbar__text shadow-js">JavaScript</span>
                    </div>
                    <div className="progressbar">
                        <svg className="progressbar__svg">
                            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-react shadow-react"> </circle>
                        </svg>
                        <span className="progressbar__text shadow-react">ReactJS</span>
                    </div>
                    <div className="progressbar">
                        <svg className="progressbar__svg">
                            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-next shadow-next"> </circle>
                        </svg>
                        <span className="progressbar__text shadow-next">NextJS</span>
                    </div>
                    <div className="progressbar">
                        <svg className="progressbar__svg">
                            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-type shadow-type"> </circle>
                        </svg>
                        <span className="progressbar__text shadow-type">TypeScript</span>
                    </div>
                    <div className="progressbar">
                        <svg className="progressbar__svg">
                            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-node shadow-node"> </circle>
                        </svg>
                        <span className="progressbar__text shadow-node">NodeJS</span>
                    </div>
                    <div className="progressbar">
                        <svg className="progressbar__svg">
                            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-csharp shadow-csharp"> </circle>
                        </svg>
                        <span className="progressbar__text shadow-csharp">C#</span>
                    </div>
                    <div className="progressbar">
                        <svg className="progressbar__svg">
                            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-thr shadow-thr"> </circle>
                        </svg>
                        <span className="progressbar__text shadow-thr">ThreeJS</span>
                    </div>
                    
                    <div className="progressbar">
                        <svg className="progressbar__svg">
                            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-scss shadow-scss"> </circle>
                        </svg>
                        <span className="progressbar__text shadow-scss">SASS</span>
                    </div>
                    <div className="progressbar">
                        <svg className="progressbar__svg">
                            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-bs shadow-bs"> </circle>
                        </svg>
                        <span className="progressbar__text shadow-bs">Bootstrap</span>
                    </div>
                    <div className="progressbar">
                        <svg className="progressbar__svg">
                            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-tw shadow-tw"> </circle>
                        </svg>
                        <span className="progressbar__text shadow-tw">Tailwind</span>
                    </div>
                    <div className="progressbar">
                        <svg className="progressbar__svg">
                            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-mongo shadow-mongo"> </circle>
                        </svg>
                        <span className="progressbar__text shadow-mongo">MongoDB</span>
                    </div>
                    <div className="progressbar">
                        <svg className="progressbar__svg">
                            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-fg shadow-fg"> </circle>
                        </svg>
                        <span className="progressbar__text shadow-fg">Figma</span>
                    </div>
                </div>
            </div>
            <div id="main-container-social" className="main-container-social"></div>
        </>
    )
}

export default Progress