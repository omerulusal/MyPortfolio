import React, { Suspense, useRef } from 'react';
import { MdMyLocation, MdMail } from "../../../node_modules/react-icons/md";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import "./Contact.css"

const Dunya = () => {
    const gltf = useLoader(GLTFLoader, '/models/dunya.glb');
    const modelRef = useRef();
    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.001;
        }
    });
    return <primitive ref={modelRef} object={gltf.scene} scale={5} />;

}

const Contact = () => {
    return (

        <div className="contact" id='contactID'>
            <div className="world">
                <Canvas style={{ borderRadius: "10px", position: "absolute", height: "520px" }} >
                    <Suspense fallback={null}>
                        <ambientLight intensity={1} />
                        <spotLight position={[10, 10, 10]} angle={1} penumbra={1} />
                        <pointLight position={[-10, -10, -10]} />
                        <Dunya />
                    </Suspense>
                </Canvas>
            </div>
            <h3 id='contact' className='contact-me ' style={{ position: "relative", zIndex: 22 }}>
                CONTACT ME
            </h3>
            <div className="ek"></div>
            <div className="contact-form" style={{ position: "relative", zIndex: 1 }}>
                <div className="contact-top">
                    <div className="location">
                        <span>Antalya</span>
                        <MdMyLocation color='lightblue' fontSize={24} />
                    </div>
                    <div className="mymail">
                        <span>Ulusallomer1@gmail.com</span>
                        <MdMail className='mdmail' color='lightblue' fontSize={24}  />
                    </div>
                </div>
                <div className="contact-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-Mail:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your e-mail" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Message:</label>
                            <textarea className='text-areaI d-block' cols="15" rows="10" placeholder='Enter your message' ></textarea>
                        </div>
                        <div className="buton">
                            <button type="submit" className="btn">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
