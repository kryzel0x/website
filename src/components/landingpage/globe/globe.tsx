import Image from 'next/image'
import circle from "../../../../public/images/globe-circle.png";
import logo from "../../../../public/images/globe-logo.png"
import React from 'react'
import { Container } from 'react-bootstrap'
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';

const Globe = () => {
    // useGSAP(() => {
    //     if (typeof document !== "undefined" && document.body.clientWidth > 992) {
    //         gsap.
    //             timeline({
    //                 scrollTrigger: {
    //                     trigger: ".globe_design",
    //                     start: "top top",
    //                     markers: true,
    //                     scrub: 2,
    //                     // toggleActions: "play reverse play reverse"
    //                     pin: true,
    //                     pinSpacing: true,
    //                     end: () => "+=200%",
    //                     // end: "bottom bottom",
    //                 }
    //             })
    //             .to(".bookmarkers ul", {
    //                 y: -35,
    //                 scale: 0.4,
    //             })
    //             .to(".community ul", {
    //                 y: 100,
    //                 scale: 2.4,
    //             }, "0")
    //     }
    // })
    return (
        <section className="globe_design">
            <Container>
                <h2 className="sec_heading">Kryzel</h2>
                <div className="globe_in">
                    <div className="globe_logo">
                        <Image src={logo} alt="logo" className='logo' />
                        <Image src={circle} alt="circle" className='circle' />
                    </div>
                    <div className="globe_lists">
                        <div className="globe_item bookmarkers">
                            <h3>Bookmakers</h3>
                            <ul>
                                <li>
                                    <p>Launch Sportsbook with No Code & Minimal Capital</p>
                                </li>
                                <li>
                                    <p>Scale without operational expertise & Payment Challenges</p>
                                </li>
                            </ul>
                        </div>
                        <div className="globe_item community">
                            <h3>Community</h3>
                            <ul>
                                <li>
                                    <p>Earn revenue by contributing to Kryzel’s Liquidity Pools</p>
                                </li>
                                <li>
                                    <p>Govern and shape the future of global decentralized sportsbook</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Globe
