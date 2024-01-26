import React from 'react';
import "./Project.css"
import Veri from "./Data/projects.json"
import { useState } from "react";


const Project = () => {
    const [data, setData] = useState(Veri);

    return (
        <>
            <div className="container-fluid text-center text-dark tamamla" id='projects'>
                <div className="row" id='satir'>
                    <div className="myprojects">
                        <h2>MY PROJECTS</h2>
                    </div>
                    {data.map((project) => (
                        <div className="col-md-3 yan" key={project.id}>
                            <div className="card" id='kart'>
                                <div className="card-top" id='kart-ust'>
                                    <div className="gorsel">
                                        <img src={project.image} alt="projects" className='img-fluid' />
                                    </div>
                                    <div className="card-title" id='baslik'>
                                        <h3>{project.name}</h3>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <button className='btn btn-dark'><a href={project.description}>Visit</a></button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
};

export default Project;
