"use client"


import './Header.css';
import Link from "next/link";
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';



export default function Header ({ name, ...props }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (


        <div className="header-sec">
            <div className="header-mx-w">
                <div className="header-logo">
                    <Link href="/" ><img src="./home image/logo.svg" /></Link>

                </div>
                <div className="header-links">
                    <ul>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Technology</a></li>
                        <li><a href="#">Industries</a></li>
                        <li><a href="#">Company</a></li>
                    </ul>
                </div>
                <div className="header-btn">
                    <button><Link style={{ textDecoration: "none", color: "black" }} href="/contact">Contact Us</Link> </button>
                </div>
                <div className="header-icon">

                    <img variant="primary" onClick={handleShow} src="./home image/name.svg" alt="" className="me-2" >{name}</img>


                    <Offcanvas show={show} onHide={handleClose} {...props}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <h5 className="canva-h5">products</h5>
                            <div className="jcsb">
                                <div className="canva-para">
                                    <div><p>air <br></br>vehicles</p></div>
                                    <div><img src="./home image/1.png" alt="" /></div>
                                </div>
                                <div className="canva-para">
                                    <div><p>light electric <br></br> vehicle</p></div>
                                    <div><img src="./home image/2.png" alt="" /></div>
                                </div>
                                <div className="canva-para">
                                    <div><p>Sustainability <br></br> system</p></div>
                                    <div><img src="./home image/3.png" alt="" /></div>
                                </div>
                                <div className="canva-para">
                                    <div><p>electric <br></br> vehicle</p></div>
                                    <div><img src="./home image/4.png" alt="" /></div>
                                </div>
                                <div className="canva-para">
                                    <div><p>marine</p></div>
                                    <div><img src="./home image/5.png" alt="" /></div>
                                </div>
                            </div>
                            <h5 className="canva-h5">technology</h5>
                            <h5 className="canva-h5">industries</h5>
                            <h5 className="canva-h5"><Link style={{ textDecoration: "none", color: "black" }} href="/contact">Contact Us</Link></h5>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
            </div>
        </div>
    )
}

function Example() {
    return (
        <div>
            {['img'].map((placement, idx) => (
                <navbar key={idx} placement={placement} name={placement} />
            ))}
        </div>
    );
}

Example();





